package com.group1.thegioididong.service;

import com.group1.thegioididong.entity.Review;

import java.util.List;

public interface ReviewService {
    List<Review> findAll();

    Review findById(Long id);

    Review save(Review review);

    Review findLastInsert();

    void deleteById(Long id);

    List<Review> findByProductId(Long id);
}
