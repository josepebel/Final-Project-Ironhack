package com.ironhack.laptopservice.controllers.implementations;


import com.ironhack.laptopservice.controllers.dto.LaptopDTO;
import com.ironhack.laptopservice.model.Laptop;
import com.ironhack.laptopservice.service.interfaces.LaptopService;
import com.ironhack.laptopservice.controllers.interfaces.LaptopController;
import com.ironhack.laptopservice.model.Laptop;
import com.ironhack.laptopservice.service.interfaces.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LaptopControllerImpl implements LaptopController {

    @Autowired
    LaptopService laptopService;

    @PostMapping("/laptop")
    @ResponseStatus(HttpStatus.CREATED)
    public Laptop addLaptop(@RequestBody LaptopDTO laptopDTO){
        return laptopService.addLaptop(laptopDTO);
    }

    @GetMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Laptop getLaptop(@PathVariable(name = "id") String id){
        return laptopService.getLaptop(id);
    }

    @GetMapping("/laptops")
    @ResponseStatus(HttpStatus.OK)
    public List<Laptop> getAllLaptops(){
        return laptopService.getAllLaptops();
    }

    @PutMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Laptop updateLaptop(@PathVariable(name = "id") String id, @RequestBody LaptopDTO laptopDTO){
        return laptopService.updateLaptop(id, laptopDTO);
    }

    @DeleteMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLaptop(@PathVariable(name = "id") String id){
        laptopService.deleteLaptop(id);
    }
}
