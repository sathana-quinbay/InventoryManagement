package com.example.SellerMicroServices.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private Integer productId;
    private String productName;
    private String sellerId;
    private String description;
    private String category;
    private Double price;
    private int quantity;
    private String imageUrl;
}
