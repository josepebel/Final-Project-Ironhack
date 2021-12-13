package com.ironhack.romservice.controllers.implementations;


import com.ironhack.romservice.controllers.dto.RomDTO;
import com.ironhack.romservice.controllers.interfaces.RomController;
import com.ironhack.romservice.model.Rom;
import com.ironhack.romservice.service.interfaces.RomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RomControllerImpl implements RomController {

    @Autowired
    RomService romService;

    @PostMapping("/rom")
    @ResponseStatus(HttpStatus.CREATED)
    public Rom addRom(@RequestBody RomDTO romDTO){
        return romService.addRom(romDTO);
    }

    @GetMapping("/rom/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Rom getRom(@PathVariable(name = "id") String id){
        return romService.getRom(id);
    }

    @PutMapping("/rom/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Rom updateRom(@PathVariable(name = "id") String id, @RequestBody RomDTO romDTO){
        return romService.updateRom(id, romDTO);
    }

    @GetMapping("/roms")
    @ResponseStatus(HttpStatus.OK)
    public List<Rom> getAllRoms(){
        return romService.getAllRoms();
    }
}
