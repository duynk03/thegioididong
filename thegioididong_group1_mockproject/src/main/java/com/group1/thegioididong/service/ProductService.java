package com.group1.thegioididong.service;

import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Page<Product> findAll(int pageNum, int pageSize) {

        Pageable pageable = PageRequest.of(pageNum - 1, pageSize);

        return productRepository.findAll(pageable);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        Optional<Product> result = productRepository.findById(id);

        Product product = null;
        if (result.isPresent()) {
            product = result.get();
        }
        return product;
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findLastInsert() {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> findByType(String type) {
        return switch (type) {
            case "laptop" -> productRepository.findByLaptopIsNotNull();
            case "phone" -> productRepository.findByPhoneIsNotNull();
            case "tablet" -> productRepository.findByTabletIsNotNull();
            case "smartwatch" -> productRepository.findBySmartwatchIsNotNull();
            default -> null;
        };
    }
}
