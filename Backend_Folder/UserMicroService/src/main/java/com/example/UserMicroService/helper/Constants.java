package com.example.UserMicroService.helper;

import org.springframework.stereotype.Component;

@Component
public class Constants {


    // Admin Request Controller
    public final static String ADMIN = "/admin";
    public final static String ADD_USER = "/addUser";
    public final static String SELLERS = "/sellers";
    public final static String GET_SPECIFIC_SELLER = "/seller/{userId}";
    public final static String STATUS_CHANGED_SUCCESS = "Updated Successfully..";
    public final static String UPDATE_SELLER_STATUS = "/status/{userId}";
    public final static String GET_USER_BY_NAME = "/sellers/{name}";


    // Auth Service Contoller  // seller Request Controller
    public final static String LOGIN = "/login";



    // Validation class
    public final static String NAME_REGEX = "[A-Za-z][A-Za-z0-9 ]{2,}$";
    public final static String EMAIL_ID = "@gmail.com";
    public final static String CONTACT_REGEX = "[0-9]+";
    public final static int MOBILE_NUMBER_LENGTH = 10;
    public final static int PASSWORD_LENGTH = 6;



    //Auth service Impl
    public final static String SUCCESS_MSG = "successfully logedIn";
    public final static int NOT_FOUND_CODE = 404;
    public final static String NOT_FOUND_MSG = "Email and Password did't match..";
    public final static String NO_ACCOUNT_FOUND_MSG = "Account does not Exist.. ";


    //Auth and Service
    public final static int SUCCESS_CODE = 202;


    // User service Impl
    public final static String ROLE_SELLER = "seller";
    public final static String SUCCESS_CREATE_MSG = "successfully Created..";
    public final static int BAD_REQUEST_CODE = 400;
    public final static String BAD_REQUEST_MSG = "Email or password or some other fields didn't match the requirment..";
    public final static int ACCOUNT_FOUND_CODE = 409;
    public  final static String ACCOUNT_FOUND_MSG = "Already email exist in another account..";
    public final static String PRODUCT_LINK = "http://10.30.1.144:8007/seller/product/";
    public final static boolean DEFAULT_USER_STATUS = true;

    public final static String  KAFKA_CONFIG = "${kafka.host.prop}";
}
