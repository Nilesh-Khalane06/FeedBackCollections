package com.customer.serviceImpl;

import com.customer.entity.UserRegi;
import com.customer.repository.UserRegistrationRepo;
import com.customer.service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

    @Autowired
    private UserRegistrationRepo userRegistrationRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserRegi register(UserRegi userRegi) {
        userRegi.setPassword(passwordEncoder.encode(userRegi.getPassword()));
        UserRegi saveUser=userRegistrationRepo.save(userRegi);
        return saveUser;
    }

    @Override
    public UserRegi login(UserRegi userRegi) {
        UserRegi byUsername = userRegistrationRepo.findByUserName(userRegi.getUserName());
        return byUsername;
    }
}
