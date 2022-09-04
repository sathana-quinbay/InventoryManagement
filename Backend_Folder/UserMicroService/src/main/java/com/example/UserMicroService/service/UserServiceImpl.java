package com.example.UserMicroService.service;

import com.example.UserMicroService.Exceptions.NoAccountFound;
import com.example.UserMicroService.entity.User;
import com.example.UserMicroService.helper.Constants;
import com.example.UserMicroService.helper.ValidationClass;
import com.example.UserMicroService.model.*;
import com.example.UserMicroService.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    private RestTemplate restTemplate;



    @Override
    public AddUserResponse addNewUser(User user)throws Exception{

        if(adminRepository.findByEmailId(user.getEmailId()) == null){

            if(ValidationClass.validateEmailId(user.getEmailId()) && ValidationClass.validateName(user.getName()) &&
                    ValidationClass.validateAddress(user.getAddress())
                    && ValidationClass.validateContact(user.getContact()) &&
                    ValidationClass.validatePassword(user.getPassword())){
                user.setUserId(UUID.randomUUID().toString());
                user.setStatus(Constants.DEFAULT_USER_STATUS);
                user.setRole(Constants.ROLE_SELLER);
                adminRepository.save(user);
                return new AddUserResponse(Constants.SUCCESS_CODE,Constants.SUCCESS_CREATE_MSG,user.getUserId());
            }
            return new AddUserResponse(Constants.BAD_REQUEST_CODE,Constants.BAD_REQUEST_MSG,null);
        }
        return new AddUserResponse(Constants.ACCOUNT_FOUND_CODE,Constants.ACCOUNT_FOUND_MSG,null);
    }



    @Override
    public UserModelWithProducts getUserDetails(String userId)throws Exception{
        Optional<User> user = adminRepository.findByUserId(userId);
        List<Product> productList = new ArrayList<>();
        if( user.isPresent() ){
              productList = restTemplate.getForObject(Constants.PRODUCT_LINK+userId,List.class);

           return UserModelMapper.parseUserModel(user.get(),productList);
        }
        throw new NoAccountFound(userId);
    }



    @Override
    public List<UserModel> getAllSeller(){

        List<User> users = adminRepository.findAllByRoleOrderByName(Constants.ROLE_SELLER);

         if(!users.isEmpty()){
             return UserModelMapper.parseUserModel(users);
         }
         else return new ArrayList<>();
    }


    @Override
    public StatusResponse changeCurrentStatus(String userId) throws Exception {

        boolean statusOfUser;
        Optional<User> user = adminRepository.findByUserId(userId);
        if(user.isPresent()){
            statusOfUser = user.get().isStatus()?false:true;
            user.get().setStatus( statusOfUser );
            adminRepository.save(user.get());
            return new StatusResponse(Constants.SUCCESS_CODE,
                    Constants.STATUS_CHANGED_SUCCESS+ValidationClass.returnStatusMessage(statusOfUser),userId);
        }
        else{
            return new StatusResponse(Constants.NOT_FOUND_CODE,Constants.NO_ACCOUNT_FOUND_MSG,userId);
        }
    }

    @Override
    public List<UserModel> getSellerDetailsByName(String name) throws Exception{
        List<User> users = adminRepository.findAllByName(name);
        if(!users.isEmpty()){
            return UserModelMapper.parseUserModel(users);
        }
        else return new ArrayList<>();
    }

}
