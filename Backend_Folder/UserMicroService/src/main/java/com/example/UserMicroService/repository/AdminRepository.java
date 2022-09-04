package com.example.UserMicroService.repository;

import com.example.UserMicroService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<User,String> {

     User findByEmailId(String emailid);

     Optional<User>  findByUserId(String UserId);

     List<User> findAllByRoleOrderByName(String role);

     List<User> findAllByName(String name);

}
