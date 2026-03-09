package com.customer.service;

import com.customer.entity.UserRegi;

public interface UserRegistrationService {
    UserRegi register(UserRegi userRegi);

    UserRegi login(UserRegi userRegi);
}
