package com.example.UserMicroService.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User extends com.example.UserMicroService.dto.User {

    @Id
    @Column(name = "emailid")
    private String emailId;

    @Column(name = "userid")
    private String userId;

    @Column(name = "role")
    private String role;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private boolean status;

    @Column(name = "address")
    private String address;

    @Column(name = "contact")
    private String contact;

    @Column(name = "password")
    private String password;
}
