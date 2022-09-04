package com.example.SellerMicroServices.controller;

import com.example.SellerMicroServices.constant.ConstantValue;
import com.example.SellerMicroServices.model.SellerId;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class kafkaProducerController {
    @Autowired
    KafkaTemplate kafkaTemplate;
    @Autowired
    ConstantValue constantValue;
    String kafkaMessage;
    ObjectMapper objectMapper;

    @PutMapping("/updatestatus")
    public String updateStatus(@RequestBody SellerId sellerId1){
        try{
            SellerId sellerId=new SellerId("QB01");
            System.out.println(sellerId);
            //sellerId.getUserId();
            kafkaMessage = objectMapper.writeValueAsString(sellerId);
        }catch (Exception e){
            System.out.println(e);
        }
        kafkaTemplate.send(constantValue.TOPIC,kafkaMessage);
        return "";
    }
}


