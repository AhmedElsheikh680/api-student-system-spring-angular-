package com.spring.student.repo;

import com.spring.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

//@RepositoryRestResource(collectionResourceRel = "stud")
//@RepositoryRestResource
@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
}
