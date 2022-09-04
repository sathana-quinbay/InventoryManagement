package com.example.SellerMicroServices.response;

import com.example.SellerMicroServices.model.SellerDetails;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SellerResponse extends Response{

    private SellerDetails data;

    public SellerResponse(Integer status_code, String message, SellerDetails data){
        super(status_code,message);
        this.data = data;
    }
}
