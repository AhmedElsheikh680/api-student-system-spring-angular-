package com.spring.student.service;

import com.spring.student.model.Student;
import com.spring.student.repo.StudentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentService {
    
    private final StudentRepo studentRepo;

    public List<Student> getAllStudents(){
        return studentRepo.findAll();
    }

    public Student getStudentById(Long id){
        return studentRepo.findById(id).get();
    }

    public Student addStudent(Student student){
        return studentRepo.save(student);
    }

    public Student updateStudent(Student student){
        return studentRepo.save(student);
    }

    public void deleteStudent(Long id){
        studentRepo.deleteById(id);
    }
}
