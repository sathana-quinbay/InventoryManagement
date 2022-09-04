package com.example.UserMicroService.consumer;


import com.example.UserMicroService.service.UserService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class KafKaConsumer {
//    @Autowired
//    ObjectMapper objectMapper;
//
//    @Autowired
//    UserService userService;
//
//    final String TOPIC = "seller";
//    final String GROUP_ID = "group_id";
//    final String CONTAINER_FACTORY  ="kafkaListenerContainerFactory";
//
//    @KafkaListener(containerFactory = CONTAINER_FACTORY,topics = TOPIC ,groupId = GROUP_ID)
//    public void consume(String message) throws Exception {
//        System.out.println((objectMapper.readValue(message, new TypeReference<String>() {})));
//    }

}
