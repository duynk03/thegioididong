package com.group1.thegioididong.restcontroller;

import com.group1.thegioididong.Exception.ProductNotFoundException;
import com.group1.thegioididong.entity.Product;
import com.group1.thegioididong.service.IProductService;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/products", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {

    private final IProductService productService;

    @Autowired
    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Product product) {
        product.setCreated_at(new Date());
        Product pro = productService.save(product);
        return new ResponseEntity<>("Product is created successfully" + pro, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getById(@PathVariable("id") Long id) {
        Product product = productService.findById(id);

        if (product == null) {
            throw new ProductNotFoundException(id);
        }

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/json")
    public ResponseEntity<Object> update(@RequestBody Product product, @PathVariable("id") Long id) {

        if (productService.findById(id) != null) {
            product.setId(id);
            product.setModified_at(new Date());
        }
        productService.save(product);
        return new ResponseEntity<>("Product is updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
        productService.deleteById(id);
        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
    }

    @RequestMapping(value = "/type", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getByType(@RequestParam(value = "name", defaultValue = "") String name) {
        return new ResponseEntity<>(productService.findByType(name), HttpStatus.OK);
    }
}
