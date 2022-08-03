package com.group1.thegioididong.service;

import com.group1.thegioididong.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IProductService {

    Page<Product> findAll(int pageNum, int pageSize);

    List<Product> findAll();

    Product findById(Long id);

    Product save(Product product);

    Product findLastInsert();

    void deleteById(Long id);

    List<Product> findByType(String type);

    List<Product> findAllNewAsc();

    List<Product> findSaleOffByDate();

    List<Product> findTop10ByManufacturer(String manufacturer);

}
