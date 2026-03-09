package com.customer.controller;

import com.customer.entity.UserRegi;
import com.customer.service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRegistrationService userRegistrationService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<UserRegi> register(@RequestBody UserRegi userRegi) {
        UserRegi registered = userRegistrationService.register(userRegi);
        return new ResponseEntity<>(registered, HttpStatus.OK);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody UserRegi userRegi) {

        UserRegi user = userRegistrationService.login(userRegi);

        Map<String, String> res = new HashMap<>();

        if (user != null && passwordEncoder.matches(userRegi.getPassword(), user.getPassword())) {

            String token = UUID.randomUUID().toString();

            res.put("authToken", token);
            res.put("msg", "Successfully Login");

            return res;
        }

        res.put("msg", "Invalid Username or Password");
        return res;
    }
}