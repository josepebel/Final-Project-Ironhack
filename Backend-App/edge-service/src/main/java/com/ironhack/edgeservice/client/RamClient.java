package com.ironhack.edgeservice.client;


import com.ironhack.edgeservice.controller.dto.LaptopDTONativo;
import com.ironhack.edgeservice.controller.dto.RamDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("ram-service")
public interface RamClient {

    @PostMapping("/ram")
    RamDTO addRam(@RequestBody RamDTO ramDTO);

    @GetMapping("/ram/{id}")
    RamDTO getRam(@PathVariable(name = "id") String id);

    @PutMapping("/ram/{id}")
    RamDTO updateRam(@PathVariable(name = "id") String id, @RequestBody RamDTO ramDTO);

    @GetMapping("/rams")
    List<RamDTO> getAllRams();
}
