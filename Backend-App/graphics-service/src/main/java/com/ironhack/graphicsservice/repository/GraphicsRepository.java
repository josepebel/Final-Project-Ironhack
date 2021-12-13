package com.ironhack.graphicsservice.repository;

import com.ironhack.graphicsservice.model.Graphics;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface GraphicsRepository extends MongoRepository<Graphics, String> {
    Optional<Graphics> findByBrandAndModel(String brand, String model);
    Optional<Graphics> findById(String id);
    List<Graphics> findAll();
}
