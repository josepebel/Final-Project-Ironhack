package com.ironhack.ramservice.controllers.implementations;


import com.ironhack.ramservice.controllers.dto.RamDTO;
import com.ironhack.ramservice.controllers.interfaces.RamController;
import com.ironhack.ramservice.model.Ram;
import com.ironhack.ramservice.service.interfaces.RamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RamControllerImpl implements RamController {

    @Autowired
    RamService ramService;

    @PostMapping("/ram")
    @ResponseStatus(HttpStatus.CREATED)
    public Ram addRam(@RequestBody RamDTO ramDTO){
        return ramService.addRam(ramDTO);
    }

    @GetMapping("/ram/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Ram getRam(@PathVariable(name = "id") String id){
        return ramService.getRam(id);
    }

    @PutMapping("/ram/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Ram updateRam(@PathVariable(name = "id") String id, @RequestBody RamDTO ramDTO){
        return ramService.updateRam(id, ramDTO);
    }

    @GetMapping("/rams")
    @ResponseStatus(HttpStatus.OK)
    public List<Ram> getAllRams(){
        return ramService.getAllRams();
    }
}
