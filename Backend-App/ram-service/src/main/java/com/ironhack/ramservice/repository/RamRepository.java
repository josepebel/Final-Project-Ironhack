package com.ironhack.ramservice.repository;


import com.ironhack.ramservice.model.Ram;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface RamRepository extends MongoRepository<Ram, String> {
    Optional<Ram> findByTypeAndSizeAndExpandSizeAndSpeed(String type, int size, int expandSize, double speed);
    Optional<Ram> findById(String id);
    List<Ram> findAll();
}
