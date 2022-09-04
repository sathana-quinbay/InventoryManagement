package com.example.SellerMicroServices.controller;


import com.example.SellerMicroServices.Service.AdminService;
import com.example.SellerMicroServices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminRequestController {


    @Autowired
    AdminService adminService;

    @GetMapping("/getAllUsers")
    public List<User> returnAllUsers(){
        try {

            return adminService.getAllUsers();
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY,e.getMessage());
        }
    }


}
