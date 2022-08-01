package com.group1.thegioididong.service;

import com.group1.thegioididong.entity.OrderDetail;
import com.group1.thegioididong.entity.Orders;
import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrdersService implements IOrdersService {

    private final OrdersRepository ordersRepository;

    @Autowired
    private IProductService productService;

    @Autowired
    public OrdersService(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    @Override
    public List<Orders> findAll() {
        return ordersRepository.findAll();
    }

    @Override
    public List<Orders> findAllDesc() {
        return ordersRepository.findAllByOrderByIdDesc();
    }

    @Override
    public Orders findById(Long id) {
        Optional<Orders> result = ordersRepository.findById(id);

        Orders orders = null;
        if (result.isPresent()) {
            orders = result.get();
        }
        return orders;
    }

    @Override
    public Orders save(Orders order) {
        List<OrderDetail> orderDetails = new ArrayList<>();
        for (int i = 0; i < order.getOrderDetails().size(); i++) {
            Product product = productService.findById(order.getOrderDetails().get(i).getProduct().getId());
            OrderDetail orderDetail = OrderDetail.builder().quantity(order.getOrderDetails().get(i).getQuantity())
                    .product(product).order(order).build();
            orderDetails.add(orderDetail);
        }
        order.setOrderDetails(orderDetails);

        return ordersRepository.save(order);
    }

    @Override
    public Orders update(Orders order) {
        return ordersRepository.save(order);
    }

    @Override
    public Orders findLastInsert() {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        ordersRepository.deleteById(id);
    }
}
