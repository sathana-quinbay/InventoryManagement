package com.example.UserMicroService.service;

import com.example.UserMicroService.model.AuthDetails;
import com.example.UserMicroService.model.AuthenticaionResponse;

public interface AuthService {

    AuthenticaionResponse login(AuthDetails authDetails);

}
