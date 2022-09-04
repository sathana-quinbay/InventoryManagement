package com.example.UserMicroService.repository;

import com.example.UserMicroService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepo extends JpaRepository<User,String> {
     User findByEmailId(String emailid);
}