package com.example.SellerMicroServices.controller;

import com.example.SellerMicroServices.Entity.Product;
import com.example.SellerMicroServices.Service.SellerService;
import com.example.SellerMicroServices.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/seller")
public class ProductController{
    @Autowired
    SellerService sellerService;

    @GetMapping("/product/{sellerId}")
    public List<ProductDto> findBySellerId(@PathVariable String sellerId){
        try {
            return sellerService.findRecordsBySellerid(sellerId);
        } catch(Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }
//    @PutMapping("/product/edit")
//    public String alterProduct(@RequestBody Product product){
//      try{
//          String str;
//          if(product.getQuantity()==0)
//              str= sellerService.deleteProductId(null);
//          else
//          str = sellerService.updateProduct(product);
//          return str;
//      }catch(Exception e){
//          throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
//
//      }
//    }

    @PostMapping("/product/add")
    public Product addProduct(@RequestBody Product product){
     return sellerService.addNewProduct(product);

    }


    }

