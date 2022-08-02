package com.group1.thegioididong.restcontroller;

import com.group1.thegioididong.Exception.OrderNotFoundException;
import com.group1.thegioididong.entity.Orders;
import com.group1.thegioididong.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/orders", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrdersController {

    private final IOrdersService ordersService;

    @Autowired
    public OrdersController(IOrdersService ordersService) {
        this.ordersService = ordersService;
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Orders>> getAll() {
        return new ResponseEntity<>(ordersService.findAllDesc(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Orders> getById(@PathVariable("id") Long id) {
        Orders order = ordersService.findById(id);

        if (order == null) {
            throw new OrderNotFoundException(id);
        }

        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> saveOrder(@RequestBody Orders order) {
        order.setCreatedAt(new Date());
        ordersService.save(order);
        return new ResponseEntity<>("Order is created successfully", HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/json")
    public ResponseEntity<Object> update(@RequestBody Orders orders, @PathVariable("id") Long id) {
        Orders updateOrder = ordersService.findById(id);
        if (updateOrder == null) {
            return new ResponseEntity<>("Order is not exist", HttpStatus.NOT_FOUND);
        }
        updateOrder.setState(orders.getState());
        updateOrder.setModifiedAt(new Date());
        ordersService.update(updateOrder);
        return new ResponseEntity<>("Order is updated successfully", HttpStatus.OK);
    }
}
