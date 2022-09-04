package com.example.SellerMicroServices.constant;

public interface Constants {
    Boolean DEFAULT_REQUEST_STATUS = false;
    String SUCCESS = "success";
    String NO_RECORD_FOUND = "No record Found!!!";
    String UPDATED_SUCCESS  = "Updated successfully!!!";
    String SELLER_DISABLED  = "deleted";
    String SELLER_EDIT  = "/seller/edit";
    String SELLER =  "/seller";
    String GET_BY_SELLERID =  "/get/{userId}";
    String EDIT_SELLER =  "/edit";
    String DELETE_SELLER =  "/delete/{sellerId}";
    String ADD_PRODUCT =  "/product/add/";
    String IMPORT_FILE_TO_ADD_PRODUCTS =  "/product/import/{sellerId}";
    String GET_ALL_PRODUCTS =  "/product/all";
    String DELETE_PRODUCT =  "/product/delete/{productId}";
    String SEARCH_PRODUCT =  "product/search";
    String PRODUCT_GET_BY_SELLERID =  "product/getAll/{sellerId}";
    String PRODUCT_SORTBYNAME =  "product/sortbyname/{sellerId}";
    String PRODUCT_SORTBYPRICE =  "product/sortbyprice/{sellerId}";
    String EDIT_PRODUCT =  "/product/edit";
    String ISACTIVE =  "isactive/{userId}";
    String CROSS_ORIGIN_URL = "*";



    String REDIS_HASH_TABLE  = "SellerStatus";
    String ADDED_SUCCESS  = "Added successfully";
    String UPDATE_SUCCESS  = "Updated successfully";
    String DELETED_SUCCESS  = "Deleted successfully";

    String SORT_BY_NAME  = "sort/name/{role}";
    String SORT_BY_USERID  = "sort/userId/{role}";

}
