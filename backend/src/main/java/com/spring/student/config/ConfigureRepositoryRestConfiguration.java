package com.spring.student.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class ConfigureRepositoryRestConfiguration implements RepositoryRestConfigurer {

    private EntityManager entityManager;

    @Autowired
    public ConfigureRepositoryRestConfiguration(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        //Epose Entity Ids

        // Get List Of Entity Classes From The Entity Manaager
        Set<EntityType<?>> entities =  entityManager.getMetamodel().getEntities();

        // Create An Array Of The Entity Types
        List<Class> entityCasses = new ArrayList<>();

        // Get The Entity Types From Entities
        for(EntityType tempEntityType: entities){
            entityCasses.add(tempEntityType.getJavaType());
        }

        // Expose The Entity ids For The Array Of Entity/Domain Types
        Class[] domainTypes = entityCasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);

    }
}
