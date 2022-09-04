package com.example.SellerMicroServices.Exception;

public class NullException extends Exception {
public NullException(String data){
    super("Record is Empty : " + data);
}
}
