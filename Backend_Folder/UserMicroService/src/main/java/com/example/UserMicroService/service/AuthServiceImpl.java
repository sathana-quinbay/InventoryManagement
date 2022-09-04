package com.example.UserMicroService.service;

import com.example.UserMicroService.entity.User;
import com.example.UserMicroService.helper.Constants;
import com.example.UserMicroService.model.AuthDetails;
import com.example.UserMicroService.model.AuthenticaionResponse;
import com.example.UserMicroService.repository.AuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import static com.example.UserMicroService.helper.Constants.*;

@Repository
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthRepo authRepo;

    @Autowired
    EntityManager entityManager;

    @Override
    public AuthenticaionResponse login(AuthDetails authDetails){

        User user = authRepo.findByEmailId(authDetails.getEmailId());

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
        Root<User> userRoot = criteriaQuery.from(User.class);

        Predicate predicate = criteriaBuilder.and(
                criteriaBuilder.equal(userRoot.get("emailid"),authDetails.getEmailId()),
                criteriaBuilder.equal(userRoot.get("password"),authDetails.getEmailId())
        );

        criteriaQuery.select(userRoot).where(predicate);

        if(authDetails.getEmailId() != null && authDetails.getPassword() != null)
            return new AuthenticaionResponse(500,"Bad Request",null,null);

        return user != null
                ? (user.getPassword().equals(authDetails.getPassword()))
                ? new AuthenticaionResponse(SUCCESS_CODE,SUCCESS_MSG,null,null)
                : new AuthenticaionResponse(NOT_FOUND_CODE,NOT_FOUND_MSG,null,null)
                : new AuthenticaionResponse(NOT_FOUND_CODE,NO_ACCOUNT_FOUND_MSG,null,null);

//        if(user == null){
//            authenticaionResponse.setHttpStatusCode(NOT_FOUND_CODE);
//            authenticaionResponse.setMessage(NO_ACCOUNT_FOUND_MSG);
//            authenticaionResponse.setRole(null);
//            authenticaionResponse.setUserId(null);
//        }
//        else{
//            if(user.getPassword().equals(authDetails.getPassword())){
//                authenticaionResponse.setHttpStatusCode(SUCCESS_CODE);
//                authenticaionResponse.setMessage(SUCCESS_MSG);
//                authenticaionResponse.setRole(user.getRole());
//                authenticaionResponse.setUserId(user.getUserId());
//            }
//            else{
//                authenticaionResponse.setHttpStatusCode(NOT_FOUND_CODE);
//                authenticaionResponse.setMessage(NOT_FOUND_MSG);
//                authenticaionResponse.setRole(null);
//                authenticaionResponse.setUserId(null);
//            }
//        }
//        return authenticaionResponse;
    }


}
