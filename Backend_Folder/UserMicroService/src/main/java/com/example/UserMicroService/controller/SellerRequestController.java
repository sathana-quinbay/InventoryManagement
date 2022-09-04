package com.example.UserMicroService.controller;

import com.example.UserMicroService.helper.Constants;
import com.example.UserMicroService.model.UserModelWithProducts;
import com.example.UserMicroService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


@RestController
@CrossOrigin(origins = "*")
public class SellerRequestController {

    @Autowired
    UserService userService;

    @GetMapping(Constants.GET_SPECIFIC_SELLER)
    public UserModelWithProducts getUserById(@PathVariable String userId){
        try {
            return userService.getUserDetails(userId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }

}
