package com.example.UserMicroService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticaionResponse {

    private int httpStatusCode;
    private String message;
    private List Data;
    private String role;
    private String userId;
}
