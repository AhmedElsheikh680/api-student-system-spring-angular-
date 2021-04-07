package com.spring.student.repo;

import com.spring.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "stud")
//@RepositoryRestResource
@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

    public List<Student> findByFullNameContaining(String fullName);
}
