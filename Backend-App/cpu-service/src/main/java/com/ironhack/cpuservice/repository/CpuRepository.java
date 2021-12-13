package com.ironhack.cpuservice.repository;

import com.ironhack.cpuservice.model.Cpu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface CpuRepository extends MongoRepository<Cpu, String> {
    Optional<Cpu> findByCpuNameAndCoresAndSpeed(String cpuName, int cores, double speed);
    Optional<Cpu> findById(String id);
    List<Cpu> findAll();
}
