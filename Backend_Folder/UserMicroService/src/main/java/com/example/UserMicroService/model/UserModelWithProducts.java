package com.example.UserMicroService.model;

import java.util.List;

public class UserModelWithProducts {

    private String emailId;
    private String userId;
    private String role;
    private String name;
    private boolean status;
    private String address;
    private String contact;
    private List<Product> products;

    public UserModelWithProducts() {
    }

    public UserModelWithProducts(String emailId, String userId, String role, String name,
                                 boolean status, String address, String contact, List<Product> products) {
        this.emailId = emailId;
        this.userId = userId;
        this.role = role;
        this.name = name;
        this.status = status;
        this.address = address;
        this.contact = contact;
        this.products = products;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "UserModelWithProducts{" +
                "emailId='" + emailId + '\'' +
                ", userId='" + userId + '\'' +
                ", role='" + role + '\'' +
                ", name='" + name + '\'' +
                ", status=" + status +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", products=" + products +
                '}';
    }
}
