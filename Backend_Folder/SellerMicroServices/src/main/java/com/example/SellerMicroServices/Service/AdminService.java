package com.example.SellerMicroServices.Service;

import com.example.SellerMicroServices.model.User;

import java.util.List;

public interface AdminService {
    public List<User> getAllUsers() throws Exception;
}
