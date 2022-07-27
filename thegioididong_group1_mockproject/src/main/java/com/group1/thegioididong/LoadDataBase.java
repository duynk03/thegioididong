package com.group1.thegioididong;

import com.group1.thegioididong.entity.Image;
import com.group1.thegioididong.entity.OrderDetail;
import com.group1.thegioididong.entity.Orders;
import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.service.IOrdersService;
import com.group1.thegioididong.service.IProductService;
import com.group1.thegioididong.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.List;


@Configuration
class LoadDataBase {
//
//    private static final Logger log = LoggerFactory.getLogger(LoadDataBase.class);
//
//    @Autowired
//    private IProductService productService;
//
//    @Bean
//    CommandLineRunner initDatabase(IOrdersService ordersService) {
//        Product product = productService.findById(1L);
//        OrderDetail orderDetail = OrderDetail.builder()
//                .product(product)
//                .quantity(2)
//                .build();
//
//        Orders order = Orders.builder()
//                .name("Duy")
//                .createdAt(new Date(System.currentTimeMillis()))
//                .modifiedAt(null)
//                .gender("nam")
//                .address("Ninh Kieu,Can Tho")
//                .payments("cad")
//                .state("Chờ xác nhận")
//                .total(10000000)
//                .orderDetails(List.of(orderDetail))
//                .build();
//
//        orderDetail.setOrder(order);
//
//        return args -> {
//            try {
//                log.info("Save orders");
//                Orders orders = ordersService.save(order);
//                System.out.println("Id" + orders.getId());
//            } catch (Exception e) {
//                log.info(e.getMessage());
//            }
//        };
//    }
}
