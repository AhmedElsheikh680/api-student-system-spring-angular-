package com.spring.student.controller;


import com.spring.student.model.Student;
import com.spring.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class StudentController {

    private final StudentService studentService;

    
    //http://localhost:8080/api/v1/student
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    //http://localhost:8080/api/v1/student?id=1
    @GetMapping("/student")
    public Student getStudentById(@RequestParam Long id){
        return studentService.getStudentById(id);
    }

    //http://localhost:8080/api/v1/students
    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

//    //http://localhost:8080/api/v1/students
//    @PutMapping("/students")
//    public Student updateStudent(@RequestBody Student student){
//        return studentService.updateStudent(student);
//    }

    //http://localhost:8080/api/v1/students?id=1
    @PutMapping("/students")
    public Student updateStudent(@RequestBody Student student, @RequestParam Long id){
        student.setId(id);
        return studentService.updateStudent(student);
    }

    //http://localhost:8080/api/v1/students?id=1
    @DeleteMapping("/students")
    public void deleteStudent(@RequestParam Long id){
        studentService.deleteStudent(id);
    }
}
