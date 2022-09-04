package com.example.SellerMicroServices.Repository;

import com.example.SellerMicroServices.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SellerRepository extends JpaRepository<Product,String> {
    public List<Product> findByProductId(String productId);

    List<Product> findAllByProductNameIgnoreCaseContainingAndSellerId(String name, String sellerId);
    List<Product> findAllBySellerId(String sellerId);

    List<Product> findAllBySellerIdIn(List<String> sellerIds);

    List<Product> findAllBySellerIdOrderByProductName(String sellerId);
    List<Product> findAllBySellerIdOrderByPrice(String sellerId);

    List<Product> findAllBySellerIdAndCategory(String sellerId, String category);

    void deleteByProductId(int productId);
    void deleteBySellerId(String sellerId);
}
