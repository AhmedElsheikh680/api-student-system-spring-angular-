package com.spring.student.repo;

import com.spring.student.model.Student;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryRestResource(collectionResourceRel = "stud")
//@RepositoryRestResource
@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {


    public List<Student> findByFullNameContaining(String fullName, Pageable pageable);

//    public List<Student> findByFullNameContaining(String fullName);


    @Query("select COUNT(id) from Student")
    public Long getStudentLength();

    @Query("select COUNT(id) from Student where fullName LIKE %?1%")
    public Long getStudentLengthByName(String name);
}
