package com.customer.service;

import com.customer.entity.Feedback;

import java.util.List;

public interface FeedbackService {

    Feedback saveFeedback(Feedback feedback);

        List<Feedback> getAllFeedBack();

        Feedback updateFeedback(Feedback feedback,int id);

        Feedback getById(int id);

    void deleteFeedback(int id);


}
