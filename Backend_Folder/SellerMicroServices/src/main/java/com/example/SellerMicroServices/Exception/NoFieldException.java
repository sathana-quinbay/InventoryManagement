package com.example.SellerMicroServices.Exception;

public class NoFieldException extends Exception {
    private String data;

    public NoFieldException(String data){
        this.data = data;
    }

    public String getMessage(String data) {
        return "Not a numer Exception : " + data;
    }
}
