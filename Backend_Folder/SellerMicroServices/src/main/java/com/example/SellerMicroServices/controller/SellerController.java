package com.example.SellerMicroServices.controller;

import com.example.SellerMicroServices.Entity.Product;
import com.example.SellerMicroServices.Service.SellerServiceImplementation;
import com.example.SellerMicroServices.model.SellerDetails;
import com.example.SellerMicroServices.response.SellerListResponse;
import com.example.SellerMicroServices.response.SellerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import static com.example.SellerMicroServices.constant.Constants.*;

@RestController
@RequestMapping(SELLER)
@CrossOrigin(origins = CROSS_ORIGIN_URL)
public class SellerController {

    @Autowired
    SellerServiceImplementation sellerServiceImplementation;

    @GetMapping(GET_BY_SELLERID)
    public SellerResponse getSellerDetails(@PathVariable String userId){
        return sellerServiceImplementation.getSellerDetails(userId);
    }

    @PutMapping(EDIT_SELLER)
    public SellerResponse editSellerDetails(@RequestBody SellerDetails sellerDetails){
        return sellerServiceImplementation.editSellerDetails(sellerDetails);
    }

    @DeleteMapping(DELETE_SELLER)
    public SellerResponse deleteSellerDetails(@PathVariable String sellerId){
        return sellerServiceImplementation.deleteAccount(sellerId);
    }

    @PostMapping(ADD_PRODUCT)
    public SellerResponse addProduct(@RequestBody Product product){
        return sellerServiceImplementation.addProduct(product);
    }

    @PostMapping(IMPORT_FILE_TO_ADD_PRODUCTS)
    public SellerListResponse importProduct(@PathVariable String sellerId,@RequestParam MultipartFile file){
        return sellerServiceImplementation.importFile(file,sellerId);
    }

    @GetMapping(GET_ALL_PRODUCTS)
    public SellerListResponse getAllProducts(){
        return sellerServiceImplementation.getAllProducts();
    }

    @DeleteMapping(DELETE_PRODUCT)
    public SellerResponse deleteProduct(@PathVariable Integer productId){
        return sellerServiceImplementation.deleteProduct(productId);
    }

    @GetMapping(SEARCH_PRODUCT)
    public SellerListResponse searchbyName(@RequestParam("search") String name , @RequestParam("sellerId") String sellerId){
        return sellerServiceImplementation.searchByName(name,sellerId);
    }

    @GetMapping(PRODUCT_GET_BY_SELLERID)
    public SellerListResponse getAllProduct(@PathVariable String sellerId){
        return sellerServiceImplementation.getProducts(sellerId);
    }

    @GetMapping(PRODUCT_SORTBYNAME)
    public SellerListResponse sortByName(@PathVariable  String sellerId){
        return sellerServiceImplementation.sortByName(sellerId);
    }

    @GetMapping(PRODUCT_SORTBYPRICE)
    public SellerListResponse sortByPrice(@PathVariable String sellerId){
        return sellerServiceImplementation.sortByPrice(sellerId);
    }

    @PutMapping(EDIT_PRODUCT)
    public SellerResponse editProduct(@RequestBody Product product){
        return sellerServiceImplementation.editProduct(product);
    }

    @GetMapping(ISACTIVE)
    public SellerResponse isActive(@PathVariable String userId){
        return sellerServiceImplementation.isActive(userId);
    }

}
