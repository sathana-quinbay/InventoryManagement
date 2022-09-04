package com.example.UserMicroService.model;

public class AddUserResponse {

    private int httpStatusCode;
    private String message;
    private String userId;

    public AddUserResponse() {
    }

    public AddUserResponse(int httpStatusCode, String message, String userId) {
        this.httpStatusCode = httpStatusCode;
        this.message = message;
        this.userId = userId;
    }

    public int getHttpStatusCode() {
        return httpStatusCode;
    }

    public void setHttpStatusCode(int httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "AddUserResponse{" +
                "httpStatusCode=" + httpStatusCode +
                ", message='" + message + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
