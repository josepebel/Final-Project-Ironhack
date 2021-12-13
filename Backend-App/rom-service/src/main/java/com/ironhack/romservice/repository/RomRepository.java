package com.ironhack.romservice.repository;

import com.ironhack.romservice.model.Rom;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface RomRepository extends MongoRepository<Rom, String> {
    Optional<Rom> findByRomTypeAndCapacity(String romType, int capacity);
    Optional<Rom> findById(String id);
    List<Rom> findAll();
}
