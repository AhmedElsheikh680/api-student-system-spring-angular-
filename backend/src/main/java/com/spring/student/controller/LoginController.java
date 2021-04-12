package com.spring.student.controller;

import com.spring.student.model.AuthenticationBean;
import com.spring.student.model.JwtLogin;
import com.spring.student.service.TokenService;;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
//@RequestMapping("/")
@RequiredArgsConstructor
public class LoginController {

    private final TokenService tokenService;



    @PostMapping("/signin")
    public AuthenticationBean login(@RequestBody JwtLogin jwtLogin){
        System.out.println("Username "+ jwtLogin.getUsername());
     return new AuthenticationBean(tokenService.login(jwtLogin));

    }


}
