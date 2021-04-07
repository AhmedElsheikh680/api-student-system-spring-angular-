package com.spring.student.service;

import com.spring.student.model.Student;
import com.spring.student.repo.StudentRepo;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentService {
    
    private final StudentRepo studentRepo;

    public List<Student> getAllStudents(int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return studentRepo.findAll(pageable).getContent();
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

    public List<Student> findAllByFullName(String fullName, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return studentRepo.findByFullNameContaining(fullName, pageable);
    }

    public Long getStudentLength(){
        return studentRepo.getStudentLength();
    }
}
