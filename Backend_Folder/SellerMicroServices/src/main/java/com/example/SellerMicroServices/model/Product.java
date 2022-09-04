package com.example.SellerMicroServices.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    private String productId;
    private String sellerId;
    private Integer quantity;
    private Double price;
    private Boolean available;
}
