package com.backend.ECommerce.controller;

import com.backend.ECommerce.model.Product;
import com.backend.ECommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsById(id));
    }

    @PostMapping(value = "/products", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addProduct(
            @RequestParam("name" ) String name,
            @RequestParam("brand" ) String brand,
            @RequestParam("description" ) String description,
            @RequestParam("price" ) BigDecimal price,
            @RequestParam("category") String category,
            @RequestParam("stockQuantity" ) int stockQuantity,
            @RequestParam("date" ) LocalDate date,
            @RequestParam("available" ) Boolean available,
            @RequestParam("image" ) MultipartFile image


    ) throws IOException {
        Product product = productService.addProduct(name,brand,description,price,category,stockQuantity,date,available, image);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> search(@RequestParam String keyword){
        List<Product> products = productService.search(keyword);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }



    @PutMapping(value = "/products/{id}", consumes = "multipart/form-data")
    public ResponseEntity<?> updateProduct(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam String brand,
            @RequestParam String description,
            @RequestParam BigDecimal price,
            @RequestParam String category,
            @RequestParam int stockQuantity,
            @RequestParam Boolean available,
            @RequestPart(required = false) MultipartFile image
    ) {
        productService.updateProduct(
                id, name, brand, description, price,
                category, stockQuantity, available, image
        );
        return ResponseEntity.ok("Product updated");
    }


    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

}
