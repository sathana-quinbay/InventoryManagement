package com.example.SellerMicroServices.response;

import com.example.SellerMicroServices.model.SellerDetails;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SellerListResponse extends Response {
    private List data;

    public SellerListResponse(Integer status_code, String message, List data){
        super(status_code,message);
        this.data = data;
    }
}
