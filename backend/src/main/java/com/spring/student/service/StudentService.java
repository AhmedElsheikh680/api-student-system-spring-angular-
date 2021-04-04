package com.spring.student.service;

import com.spring.student.repo.StudentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StudentService {
    
    private final StudentRepo studentRepo;
}
