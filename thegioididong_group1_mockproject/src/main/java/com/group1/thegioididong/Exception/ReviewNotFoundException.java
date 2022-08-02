package com.group1.thegioididong.Exception;

public class ReviewNotFoundException extends RuntimeException {
    public ReviewNotFoundException(Long id) {
        super("Could not find review " + id);
    }
}
