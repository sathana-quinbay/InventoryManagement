package com.example.SellerMicroServices.Service;

import com.example.SellerMicroServices.Entity.Product;
import com.example.SellerMicroServices.Exception.NullException;
import com.example.SellerMicroServices.dto.ProductDto;
import com.example.SellerMicroServices.model.SellerDetails;
import com.example.SellerMicroServices.response.SellerListResponse;
import com.example.SellerMicroServices.response.SellerResponse;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface SellerService {
    SellerResponse editProduct(Product product);

    @Transactional
    SellerResponse deleteProduct(Integer productId);

    SellerResponse isActive(String userId);

    public List<ProductDto> findRecordsBySellerid(String sellerId) throws NullException;
    public List<Product> findRecordsByProductid(String productId) throws NullException;
//    public String updateProduct(Product product) throws CustomException;
    public Product addNewProduct(Product product);
    public String deleteProductId(String productId) throws NullException;

    SellerListResponse importFile(MultipartFile file, String selleId);


    SellerResponse getSellerDetails(String userId);
    SellerResponse editSellerDetails(SellerDetails sellerDetails);


    @Transactional
    SellerResponse deleteAccount(String sellerId);

    SellerListResponse getAllProducts();

    SellerListResponse getProducts(String sellerId);

    SellerListResponse searchByName(String name, String sellerId);

    SellerListResponse sortByName(String sellerId);
    SellerListResponse sortByPrice(String sellerId);

    SellerListResponse filterbyCategory(String sellerId, String category);

    SellerResponse addProduct(Product product);
}
