package com.example.UserMicroService.controller;


import com.example.UserMicroService.helper.Constants;
import com.example.UserMicroService.model.AuthDetails;
import com.example.UserMicroService.model.AuthenticaionResponse;
import com.example.UserMicroService.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import static com.example.UserMicroService.helper.Constants.*;

@RestController
@CrossOrigin(origins = "*")
public class AuthServiceController {

    @Autowired
    AuthService authService;


    @PostMapping(LOGIN)
    public AuthenticaionResponse login(@RequestBody AuthDetails authDetails){
        return authService.login(authDetails);
    }

}
