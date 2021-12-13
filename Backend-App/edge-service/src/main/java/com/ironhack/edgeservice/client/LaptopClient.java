package com.ironhack.edgeservice.client;


import com.ironhack.edgeservice.controller.dto.LaptopDTO;
import com.ironhack.edgeservice.controller.dto.LaptopDTONativo;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("laptop-service")
public interface LaptopClient {


    @PostMapping("/laptop")
    LaptopDTONativo addLaptop(@RequestBody LaptopDTONativo laptopDTONativo);

    @GetMapping("/laptop/{id}")
    LaptopDTONativo getLaptop(@PathVariable(name = "id") String id);

    @GetMapping("/laptops")
    List<LaptopDTONativo> getAllLaptops();

    @PutMapping("/laptop/{id}")
    LaptopDTONativo updateLaptop(@PathVariable(name = "id") String id, @RequestBody LaptopDTONativo laptopDTONativo);

    @DeleteMapping("/laptop/{id}")
    void deleteLaptop(@PathVariable(name = "id") String id);
}
