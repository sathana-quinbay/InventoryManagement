package com.example.UserMicroService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    private String emailId;
    private String userId;
    private String role;
    private String name;
    private boolean status;
    private String address;
    private String contact;
}
