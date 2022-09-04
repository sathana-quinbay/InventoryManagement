package com.example.UserMicroService.controller;
import com.example.UserMicroService.entity.User;
import com.example.UserMicroService.helper.Constants;
import com.example.UserMicroService.model.AddUserResponse;
import com.example.UserMicroService.model.StatusResponse;
import com.example.UserMicroService.model.UserModel;
import com.example.UserMicroService.model.UserModelWithProducts;
import com.example.UserMicroService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static com.example.UserMicroService.helper.Constants.*;

@RestController
@RequestMapping(ADMIN)
@CrossOrigin(origins = "*")
public class AdminRequestController {

    @Autowired
    UserService userService;


    @PostMapping(ADD_USER)
    public AddUserResponse addUser(@RequestBody User user){
        try {
            return userService.addNewUser(user);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }


    @GetMapping(SELLERS)
    public List<UserModel> getAllSeller(){
           return userService.getAllSeller();
    }


    @GetMapping(GET_SPECIFIC_SELLER)
    public UserModelWithProducts getUserById(@PathVariable String userId){
        try {
            return userService.getUserDetails(userId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage(),e);
        }
    }


    @PutMapping(UPDATE_SELLER_STATUS)
    public StatusResponse changeStatus(@PathVariable String userId){
        try {
            return userService.changeCurrentStatus(userId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE,e.getMessage());
        }
    }


    @GetMapping(GET_USER_BY_NAME)
    public List<UserModel> getSellerByName(@PathVariable String name){
        try {
            return userService.getSellerDetailsByName(name);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }

}
