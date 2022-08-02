package com.group1.thegioididong.restcontroller;

import com.group1.thegioididong.Exception.ProductNotFoundException;
import com.group1.thegioididong.Exception.ReviewNotFoundException;
import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.entity.Review;
import com.group1.thegioididong.service.IProductService;
import com.group1.thegioididong.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/reviews", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReviewController {

    private final ReviewService reviewService;
    private final IProductService productService;

    @Autowired
    public ReviewController(ReviewService reviewService, IProductService productService) {
        this.reviewService = reviewService;
        this.productService = productService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Review>> getAll() {
        return new ResponseEntity<>(reviewService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public ResponseEntity<List<Review>> getByProductId(@RequestParam(value = "id", defaultValue = "") Long id) {
        return new ResponseEntity<>(reviewService.findByProductId(id), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Review review) {
        Product product = productService.findById(review.getProduct().getId());
        review.setProduct(product);
        Review newReview = reviewService.save(review);
        return new ResponseEntity<>("Review is created successfully: " + newReview, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Review> getById(@PathVariable("id") Long id) {
        Review review = reviewService.findById(id);

        if (review == null) {
            throw new ReviewNotFoundException(id);
        }

        return new ResponseEntity<>(review, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
        reviewService.deleteById(id);
        return new ResponseEntity<>("Review is deleted successfully", HttpStatus.OK);
    }
}
