package com.spring.student.controller;


import com.spring.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
public class StudentController {

    private final StudentService studentService;
}
