package com.example.SellerMicroServices.Exception;

public class NotNumber extends Exception {
    String data;

    public NotNumber(String data){
        this.data = data;
    }

    public String getMessage(String data) {
        return "Not a number Exception : " + data;
    }
}
