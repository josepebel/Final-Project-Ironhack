package com.ironhack.laptopservice.service.interfaces;

import com.ironhack.laptopservice.controllers.dto.LaptopDTO;
import com.ironhack.laptopservice.model.Laptop;

import java.util.List;

public interface LaptopService {

    Laptop addLaptop(LaptopDTO laptopDTO);
    Laptop getLaptop(String id);
    Laptop updateLaptop(String id, LaptopDTO laptopDTO);
    List<Laptop> getAllLaptops();
    void deleteLaptop(String id);
}
