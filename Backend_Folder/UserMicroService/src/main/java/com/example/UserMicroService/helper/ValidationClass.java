package com.example.UserMicroService.helper;

public class ValidationClass {



    public static boolean validateEmailId(String emailid){
        return emailid != null && emailid.endsWith(Constants.EMAIL_ID);
    }

    public static boolean validateName(String name){
        return name!=null && name.matches(Constants.NAME_REGEX);
    }

    public static boolean validateAddress(String address){
        return address!=null && !address.isEmpty();
    }

    public static boolean validateContact(String contact){

        return contact != null && contact.matches(Constants.CONTACT_REGEX) &&
                contact.length() == Constants.MOBILE_NUMBER_LENGTH;
    }

    public static boolean validatePassword( String password ){

        return password!=null && password.length() >= Constants.PASSWORD_LENGTH;
    }



    public static String returnStatusMessage(boolean status){
        return status? "Enabled Seller..": "Disabled Seller..";

    }


}
