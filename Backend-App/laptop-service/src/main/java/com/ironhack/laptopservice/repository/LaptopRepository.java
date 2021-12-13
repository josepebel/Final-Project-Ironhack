package com.ironhack.laptopservice.repository;

import com.ironhack.laptopservice.model.Laptop;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface LaptopRepository extends MongoRepository<Laptop, String> {
    Optional<Laptop> findByBrandAndModel(String brand, String model);
    Optional<Laptop> findById(String id);
    List<Laptop> findAll();
}
