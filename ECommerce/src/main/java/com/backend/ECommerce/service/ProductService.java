package com.backend.ECommerce.service;

import com.backend.ECommerce.model.Product;
import com.backend.ECommerce.repository.ProductRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo product;

    public List<Product> getProducts() {
        return product.findAll();
    }

    public Product getProductsById(Long id){
        return product.findById(id).orElseThrow(()-> new IllegalArgumentException("Product not found with this id"));
    }

    public Product addProduct(String name, String brand, String description, BigDecimal price, String category, int stockQuantity, LocalDate date, Boolean available, MultipartFile image) throws IOException {
            String folder = "uploads";
            Files.createDirectories(Paths.get(folder));

            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            Path path = Paths.get(folder, fileName);
            Files.copy(image.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            Product product1 = new Product();
            product1.setName(name);
            product1.setBrand(brand);
            product1.setDescription(description);
            product1.setPrice(price);
            product1.setCategory(category);
            product1.setStockQuantity(stockQuantity);
            product1.setDate(date);
            product1.setAvailable(available);
            product1.setImage(fileName);

        return product.save(product1);
    }


    public void updateProduct(
            Long id,
            String name,
            String brand,
            String description,
            BigDecimal price,
            String category,
            int stockQuantity,
            Boolean available,
            MultipartFile image
    ) {
        Product prod = product.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        prod.setName(name);
        prod.setBrand(brand);
        prod.setDescription(description);
        prod.setPrice(price);
        prod.setCategory(category);
        prod.setStockQuantity(stockQuantity);
        prod.setAvailable(available);

        if (image != null && !image.isEmpty()) {
            // save image & set image path
            prod.setImage(image.getOriginalFilename());
        }

        product.save(prod);
    }


    public void deleteProduct(Long id) {
        product.deleteById(id);
    }

    public List<Product> search(String keyword) {
        return product.search(keyword);
    }
}
