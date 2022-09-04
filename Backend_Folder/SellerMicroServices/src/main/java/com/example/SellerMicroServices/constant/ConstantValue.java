package com.example.SellerMicroServices.constant;

import org.springframework.context.annotation.Configuration;

@Configuration
public class ConstantValue implements ConstantInterface{
    public final static String TOPIC="sampledemo";

    public final static String GET_ALL_USER_LINK = "//http://10.30.1.35:8005/admin/seller";
}
