package com.group1.thegioididong.service;


import com.group1.thegioididong.entity.Orders;

import java.util.List;

public interface IOrdersService {

    List<Orders> findAll();

    Orders findById(Long id);

    Orders save(Orders order);

    Orders findLastInsert();

    void deleteById(Long id);

    List<Orders> findAllDesc();

    Orders update(Orders order);

    List<Orders> findByPhone(String number);

}
