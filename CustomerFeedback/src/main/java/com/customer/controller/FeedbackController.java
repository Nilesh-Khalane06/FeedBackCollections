package com.customer.controller;

import com.customer.entity.Feedback;
import com.customer.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/saveFeedback")
    public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback feedback){
        Feedback saveFeedback = feedbackService.saveFeedback(feedback);
        return new ResponseEntity<>(saveFeedback, HttpStatus.OK);

    }

    @GetMapping("/getAllFeedback")
    public ResponseEntity<List<Feedback>> getAllFeedBack(){
        List<Feedback> allFeedBack = feedbackService.getAllFeedBack();
        return new ResponseEntity<>(allFeedBack,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Feedback> updateFeedback(@RequestBody Feedback feedback, @PathVariable int id){
        Feedback updated = feedbackService.updateFeedback(feedback, id);
        return new ResponseEntity<>(updated,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getById(@PathVariable int id){
        Feedback byId = feedbackService.getById(id);
        return new ResponseEntity<>(byId,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable int id){
        feedbackService.deleteFeedback(id);
        return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
    }


}
