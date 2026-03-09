package com.customer.serviceImpl;

import com.customer.entity.Feedback;
import com.customer.repository.FeedbackRepository;
import com.customer.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    
    @Autowired
    private FeedbackRepository feedbackRepository;
    
    @Override
    public Feedback saveFeedback(Feedback feedback) {
        Feedback saved = feedbackRepository.save(feedback);
        return saved;
    }

    @Override
    public List<Feedback> getAllFeedBack() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList;
    }

    @Override
    public Feedback updateFeedback(Feedback feedback, int id) {
        Feedback feedbackdb = feedbackRepository.findById(id).orElseThrow(() -> new RuntimeException(("not found")));
        feedbackdb.setFeedback(feedback.getFeedback());
        feedbackdb.setLocalDate(feedback.getLocalDate());

        Feedback updateSaved = feedbackRepository.save(feedbackdb);
        return updateSaved;
    }

    @Override
    public Feedback getById(int id) {
        Feedback found = feedbackRepository.findById(id).orElseThrow(() -> new RuntimeException("not found"));
        return found;
    }

    @Override
    public void deleteFeedback(int id) {
        feedbackRepository.deleteById(id);
    }
}
