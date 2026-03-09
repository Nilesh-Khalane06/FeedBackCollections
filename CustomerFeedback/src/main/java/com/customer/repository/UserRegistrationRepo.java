package com.customer.repository;

import com.customer.entity.UserRegi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRegistrationRepo extends JpaRepository<UserRegi, Integer> {

    UserRegi findByUserName(String userName);

}