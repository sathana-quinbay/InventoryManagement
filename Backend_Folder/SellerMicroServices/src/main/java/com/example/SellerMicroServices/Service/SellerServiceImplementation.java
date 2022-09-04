package com.example.SellerMicroServices.Service;

import com.example.SellerMicroServices.Entity.Product;
import com.example.SellerMicroServices.Exception.NoFieldException;
import com.example.SellerMicroServices.Exception.NullException;
import com.example.SellerMicroServices.Repository.SellerRepository;
import com.example.SellerMicroServices.dto.ProductDto;
import com.example.SellerMicroServices.model.SellerDetails;
import com.example.SellerMicroServices.response.SellerListResponse;
import com.example.SellerMicroServices.response.SellerResponse;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import org.omg.CORBA.DynAnyPackage.Invalid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import static com.example.SellerMicroServices.constant.Constants.*;

@Service
public class SellerServiceImplementation implements SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private RedisTemplate redisTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    private List<ProductDto> productList = new ArrayList<>();
    private List<Product> importList = new ArrayList<>();


    //################################################################################################################//

    @Override
    public SellerResponse getSellerDetails(String userId) {
        try{
            SellerDetails sellerDetails = restTemplate.getForObject(
                    "http://localhost:8002/admin/seller/" + userId,
                    SellerDetails.class
            );
            return sellerDetails != null
                    ? new SellerResponse(HttpStatus.OK.value(),SUCCESS,sellerDetails)
                    : new SellerResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerResponse editSellerDetails(SellerDetails sellerDetails) {

        try{
            restTemplate.postForObject("http://localhost:8002/admin/seller/edit",sellerDetails,SellerDetails.class);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
        return new SellerResponse(HttpStatus.ACCEPTED.value(),UPDATED_SUCCESS,null);
    }

    @Transactional
    @Override
    public SellerResponse deleteAccount(String sellerId){ ///NOT completed.....
        try{
            redisTemplate.opsForHash().put(REDIS_HASH_TABLE,sellerId,SELLER_DISABLED);
            return new SellerResponse(HttpStatus.OK.value(),SUCCESS,null);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    //################################################################################################################//

    //################################################################################################################//


    @Override
    public SellerListResponse getAllProducts() {
        try{
            List<Product> productList = sellerRepository.findAll();
            return !productList.isEmpty()
                    ? new SellerListResponse(HttpStatus.OK.value(),SUCCESS,productList)
                    : new SellerListResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerListResponse getProducts(String sellerId) {
        try{
            List<Product> productList = sellerRepository.findAllBySellerId(sellerId);
            return !productList.isEmpty()
                    ? new SellerListResponse(HttpStatus.OK.value(),SUCCESS,productList)
                    : new SellerListResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerListResponse searchByName(String name, String sellerId) {
        try{
            List<Product> productList = sellerRepository
                    .findAllByProductNameIgnoreCaseContainingAndSellerId(name,sellerId);

            return !productList.isEmpty()
                    ? new SellerListResponse(HttpStatus.OK.value(),SUCCESS,productList)
                    : new SellerListResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    //################################################################################################################//



    @Override
    public SellerListResponse sortByName(String sellerId) {
        try {
            List<Product> productList = sellerRepository.findAllBySellerIdOrderByProductName(sellerId);
            return !productList.isEmpty()
                    ? new SellerListResponse(HttpStatus.OK.value(),SUCCESS,productList)
                    : new SellerListResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerListResponse sortByPrice(String sellerId) {
        try {
            List<Product> productList = sellerRepository.findAllBySellerIdOrderByPrice(sellerId);
            return !productList.isEmpty()
                    ? new SellerListResponse(HttpStatus.OK.value(),SUCCESS,productList)
                    : new SellerListResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    //################################################################################################################//

    @Override
    public SellerListResponse filterbyCategory(String sellerId, String category) {
        List<Product> productList = sellerRepository.findAllBySellerIdAndCategory(sellerId,category);
        return null;
    }


    //################################################################################################################//

    @Override
    public SellerResponse addProduct(Product product) {
        try{
            sellerRepository.save(product);
            return new SellerResponse(HttpStatus.CREATED.value(),ADDED_SUCCESS,null);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerResponse editProduct(Product product) {
        try{
            sellerRepository.save(product);
            return new SellerResponse(HttpStatus.ACCEPTED.value(),UPDATE_SUCCESS,null);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Transactional
    @Override
    public SellerResponse deleteProduct(Integer productId) {
        try{
            sellerRepository.deleteByProductId(productId);
            return new SellerResponse(HttpStatus.OK.value(),DELETED_SUCCESS,null);
        }catch (Exception e){
            return new SellerResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }
    }

    @Override
    public SellerResponse isActive(String userId){
        String status = redisTemplate.opsForHash().get(REDIS_HASH_TABLE,userId).toString();
        if(status.isEmpty()) return new SellerResponse(HttpStatus.NOT_FOUND.value(),NO_RECORD_FOUND,null);
        return new SellerResponse(HttpStatus.OK.value(),SUCCESS,null);
    }


    //################################################################################################################//

    @Override
    public List findRecordsBySellerid(String sellerId) throws NullException {

        List<Product> productsList = sellerRepository.findAllBySellerIdOrderByProductName(sellerId);
        if (productsList.isEmpty())
            throw new NullException("");

        return productsList;
    }
    @Override
    public List<Product> findRecordsByProductid(String productId) throws NullException {
        if (sellerRepository.findByProductId(productId).isEmpty())
            throw new NullException("");

        return sellerRepository.findByProductId(productId);
    }

    @Override
    public Product addNewProduct(Product product){
       product.setProductId(null);
       return sellerRepository.save(product);
    }

    @Override
    public String deleteProductId(String productId) throws NullException{

        if (sellerRepository.findByProductId(productId).isEmpty() && productId==null)
            throw new NullException("");
        else{
            sellerRepository.deleteById(productId);
            return DELETED_SUCCESS;
        }
    }

    @Override
    public SellerListResponse importFile(MultipartFile file, String selleId) {
        String fileName = file.getOriginalFilename();
        if (fileName != null && !fileName.substring(fileName.lastIndexOf(".")).equals(".csv"))
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(), "Invalid File Type", productList);
        if(file.isEmpty()) new SellerListResponse(HttpStatus.BAD_REQUEST.value(),"File Empty",productList);

        try(CSVReader csvReader = new CSVReaderBuilder(
                new InputStreamReader(file.getInputStream())).withSkipLines(1).build()) {

            List<String[]> dataList = csvReader.readAll();

            for (String[] data : dataList) {

                ProductDto product = new ProductDto();

                if(data[0].isEmpty()) throw new NullException("ProductName");
                if(data[1].isEmpty()) throw new NullException("Description");
                if(data[2].isEmpty()) throw new NullException("Category");
                if(data[3].isEmpty()) throw new NullException("Price");
                if(data[4].isEmpty()) throw new NullException("Quantity");
                if(data[5].isEmpty()) throw new NullException("ImageUrl");

                product.setProductName(data[0]);
                product.setSellerId(selleId);
                product.setDescription(data[1]);
                product.setCategory(data[2]);
                product.setPrice(Double.parseDouble(data[3]));
                product.setQuantity(Integer.parseInt(data[4]));
                product.setImageUrl(data[5]);
                productList.add(product);
            }
            importList = objectMapper.convertValue(productList, new TypeReference<List<Product>>() {});
            sellerRepository.saveAll(importList);
            importList.clear();
            productList.clear();
            return new SellerListResponse(HttpStatus.OK.value(),SUCCESS,null);
        }catch (NullException e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }catch (Exception e){
            return new SellerListResponse(HttpStatus.BAD_REQUEST.value(),e.getMessage(),null);
        }

    }
}

