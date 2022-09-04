package com.example.SellerMicroServices.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SellerDetails {
    private String emailId;
    private String userId;
    private String role;
    private String name;
    private String status;
    private String address;
    private String contact;
}
