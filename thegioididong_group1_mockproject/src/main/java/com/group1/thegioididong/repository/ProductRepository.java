package com.group1.thegioididong.repository;

import com.group1.thegioididong.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}