package com.group1.thegioididong.repository;

import com.group1.thegioididong.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByLaptopIsNotNull();

    List<Product> findByPhoneIsNotNull();

    List<Product> findByTabletIsNotNull();

    List<Product> findBySmartwatchIsNotNull();

    List<Product> findTop20ByStateContainingIgnoreCaseOrderByCreatedAtDesc(String state);

    List<Product> findTop20BySaleOffGreaterThanEqualAndStateContainingIgnoreCaseOrderByCreatedAtDesc(int saleOff, String state);

    List<Product> findTop10ByManufacturerEqualsAndStateContainingIgnoreCaseOrderByCreatedAtDesc(String manufacturer, String state);

    List<Product> findByNameContainingIgnoreCaseOrderByCreatedAtDesc(String name);

    List<Product> findAllByOrderByCreatedAtDesc();
}