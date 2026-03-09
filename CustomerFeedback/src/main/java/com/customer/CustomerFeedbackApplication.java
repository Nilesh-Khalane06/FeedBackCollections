package com.customer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CustomerFeedbackApplication {

	public static void main(String[] args) {
		System.err.println("start");
        SpringApplication.run(CustomerFeedbackApplication.class, args);
        System.err.println("end");
	}

}
