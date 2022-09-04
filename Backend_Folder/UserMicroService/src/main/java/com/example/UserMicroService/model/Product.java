package com.example.UserMicroService.model;

public class Product {

    private String sellerId;
    private String productId;
    private String productName;
    private String discription;
    private int productPrice;
    private int sellingPrice;
    private int quantity;
    private String imageUrl;
    private int promo;


    public Product() {
    }

    public Product(String sellerId, String productId, String productName, String discription, int productPrice,
                   int sellingPrice, int quantity, String imageUrl, int promo) {
        this.sellerId = sellerId;
        this.productId = productId;
        this.productName = productName;
        this.discription = discription;
        this.productPrice = productPrice;
        this.sellingPrice = sellingPrice;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.promo = promo;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }

    public int getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(int sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getPromo() {
        return promo;
    }

    public void setPromo(int promo) {
        this.promo = promo;
    }

    @Override
    public String toString() {
        return "Product{" +
                "sellerId='" + sellerId + '\'' +
                ", productId='" + productId + '\'' +
                ", productName='" + productName + '\'' +
                ", discription='" + discription + '\'' +
                ", productPrice=" + productPrice +
                ", sellingPrice=" + sellingPrice +
                ", quantity=" + quantity +
                ", imageUrl='" + imageUrl + '\'' +
                ", promo=" + promo +
                '}';
    }
}
