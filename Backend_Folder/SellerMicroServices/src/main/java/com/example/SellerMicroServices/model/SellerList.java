package com.example.SellerMicroServices.model;

import com.example.SellerMicroServices.model.SellerDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class SellerList {
    private List<SellerDetails> sellerDetails;

    public SellerList() {
        sellerDetails = new ArrayList<>();
    }
}
