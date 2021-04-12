package com.spring.student.controller;

import com.spring.student.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicAuth")
    public AuthenticationBean basicAuthentication(){
        return new AuthenticationBean("You Are Authenticated");
    }

    @GetMapping("/main")
    public String main(){
        return "Yes Yes";
    }
}
