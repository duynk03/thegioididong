package com.group1.thegioididong.service;

import com.group1.thegioididong.entity.Review;
import com.group1.thegioididong.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewServiceImpl(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Override
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    @Override
    public Review findById(Long id) {
        Optional<Review> result = reviewRepository.findById(id);

        Review review = null;
        if (result.isPresent()) {
            review = result.get();
        }
        return review;
    }

    @Override
    public Review save(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public Review findLastInsert() {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public List<Review> findByProductId(Long id) {
        return reviewRepository.findByProductId(id);
    }
}
