package com.example.SellerMicroServices.Entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="productdb")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "productid")
    private Integer productId;

    @Column(name = "productname")
    private String productName;

    @Column(name = "sellerid")
    private String sellerId;

    @Column(name = "description")
    private String description;

    @Column(name = "category")
    private String category;

    @Column(name = "price")
    private Double price;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "imageurl")
    private String imageUrl;

}


