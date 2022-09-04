package com.example.SellerMicroServices.model;

public class SellerId {

    private String userId;

    public SellerId(String userId) {
        this.userId = userId;
    }
    public SellerId() {
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "SellerId{" +
                "userId='" + userId + '\'' +
                '}';
    }
}
