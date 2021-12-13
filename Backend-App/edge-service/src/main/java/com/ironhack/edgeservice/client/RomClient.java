package com.ironhack.edgeservice.client;


import com.ironhack.edgeservice.controller.dto.RamDTO;
import com.ironhack.edgeservice.controller.dto.RomDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("rom-service")
public interface RomClient {

    @PostMapping("/rom")
    RomDTO addRom(@RequestBody RomDTO romDTO);

    @GetMapping("/rom/{id}")
    RomDTO getRom(@PathVariable(name = "id") String id);

    @PutMapping("/rom/{id}")
    RomDTO updateRom(@PathVariable(name = "id") String id, @RequestBody RomDTO romDTO);

    @GetMapping("/roms")
    List<RomDTO> getAllRoms();
}
