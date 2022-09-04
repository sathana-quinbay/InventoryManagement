package com.example.SellerMicroServices.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RedisHash("SellerStatus")
public class SellerStatus implements Serializable {
    @Id
    private String SellerId;
    private String status;
}
