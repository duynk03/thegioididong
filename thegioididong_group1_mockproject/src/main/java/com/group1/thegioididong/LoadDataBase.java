package com.group1.thegioididong;

import com.group1.thegioididong.entity.Image;
import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.service.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
class LoadDataBase {

//    private static final Logger log = LoggerFactory.getLogger(LoadDataBase.class);
//
//    @Bean
//    CommandLineRunner initDatabase(IProductService productService) {
//
//        Image img1 = new Image();
//        img1.setSource("/product-1");
//
//        Image img2 = new Image();
//        img2.setSource("/product-2");
//
//        Product product = Product.builder()
//                .name("iphone 12")
//                .price(2000000)
//                .quantity(100)
//                .stillInBusiness(true)
//                .saleOff(0)
//                .build();
//
//        img1.setProduct(product);
//        img2.setProduct(product);
//
//        product.setImages(List.of(img1, img2));
//        return args -> {
//            try {
//                productService.save(product);
//            } catch (Exception e) {
//                log.info(e.getMessage());
//            }
//        };
//    }
}
