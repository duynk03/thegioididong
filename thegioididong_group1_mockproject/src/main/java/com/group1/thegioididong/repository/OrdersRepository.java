package com.group1.thegioididong.repository;

import com.group1.thegioididong.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> findAllByOrderByIdDesc();

    List<Orders> findAllByPhone(String number);
}
