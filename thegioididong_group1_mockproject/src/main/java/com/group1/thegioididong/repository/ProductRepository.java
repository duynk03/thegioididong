package com.group1.thegioididong.repository;

import com.group1.thegioididong.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByLaptopIsNotNull();

    List<Product> findByPhoneIsNotNull();

    List<Product> findByTabletIsNotNull();

    List<Product> findBySmartwatchIsNotNull();
}