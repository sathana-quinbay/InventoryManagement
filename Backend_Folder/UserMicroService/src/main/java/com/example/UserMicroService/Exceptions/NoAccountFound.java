package com.example.UserMicroService.Exceptions;

public class NoAccountFound extends Exception {

    public NoAccountFound(String mailid){
        super("No account found with mailId -> "+mailid);
    }

}
