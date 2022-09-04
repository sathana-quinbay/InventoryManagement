package com.example.UserMicroService.service;

import com.example.UserMicroService.entity.User;
import com.example.UserMicroService.model.AddUserResponse;
import com.example.UserMicroService.model.StatusResponse;
import com.example.UserMicroService.model.UserModel;
import com.example.UserMicroService.model.UserModelWithProducts;

import java.util.List;


public interface UserService {

     UserModelWithProducts getUserDetails(String userId)throws Exception;

     AddUserResponse addNewUser(User user) throws Exception;

     List<UserModel> getAllSeller();

     StatusResponse changeCurrentStatus(String userId) throws Exception;

     List<UserModel> getSellerDetailsByName(String name) throws Exception;


}
