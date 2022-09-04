package com.example.SellerMicroServices.Service;


import com.example.SellerMicroServices.constant.ConstantValue;
import com.example.SellerMicroServices.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    ConstantValue constantValue;
    @Autowired
    private RestTemplate restTemplate;
    //http://10.30.1.35:8005/admin/seller
    private  String URI;
    static List<User> userList = new ArrayList<>();
    @Override
    public List<User> getAllUsers() throws Exception{
            URI = UriComponentsBuilder.fromHttpUrl(constantValue.GET_ALL_USER_LINK).encode().toUriString();
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
            HttpEntity<List> entity = new HttpEntity<List>(httpHeaders);
            userList = restTemplate.exchange(URI, HttpMethod.GET, entity, List.class).getBody();
        //System.out.println(userList);
        return userList;

    }

}
