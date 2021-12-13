package com.ironhack.edgeservice.controller.impl;


import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.controller.interfaces.EdgeController;
import com.ironhack.edgeservice.service.interfaces.EdgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:4200")
public class EdgeControllerImpl implements EdgeController {


    @Autowired
    private EdgeService edgeService;

    @PostMapping("/ram")
    @ResponseStatus(HttpStatus.CREATED)
    public RamDTO addRam(@RequestBody RamDTO ramDTO){
        return edgeService.addRam(ramDTO);
    }

    @GetMapping("/ram/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RamDTO getRam(@PathVariable(name = "id") String id){
        return edgeService.getRam(id);
    }

    @PutMapping("/ram/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public RamDTO updateRam(@PathVariable(name = "id") String id, @RequestBody RamDTO ramDTO){
        return edgeService.updateRam(id, ramDTO);
    }

    @GetMapping("/rams")
    @ResponseStatus(HttpStatus.OK)
    public List<RamDTO> getAllRams(){
        return edgeService.getAllRams();
    }

    @PostMapping("/rom")
    @ResponseStatus(HttpStatus.CREATED)
    public RomDTO addRom(@RequestBody RomDTO romDTO){
        return edgeService.addRom(romDTO);
    }

    @GetMapping("/rom/{id}")
    @ResponseStatus(HttpStatus.OK)
    public RomDTO getRom(@PathVariable(name = "id") String id){
        return edgeService.getRom(id);
    }

    @PutMapping("/rom/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public RomDTO updateRom(@PathVariable(name = "id") String id, @RequestBody RomDTO romDTO){
        return edgeService.updateRom(id, romDTO);
    }

    @GetMapping("/roms")
    @ResponseStatus(HttpStatus.OK)
    public List<RomDTO> getAllRoms(){
        return edgeService.getAllRoms();
    }

    @PostMapping("/cpu")
    @ResponseStatus(HttpStatus.CREATED)
    public CpuDTO addCpu(@RequestBody CpuDTO cpuDTO){
        return edgeService.addCpu(cpuDTO);
    }

    @GetMapping("/cpu/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CpuDTO getCpu(@PathVariable(name = "id") String id){
        return edgeService.getCpu(id);
    }

    @PutMapping("/cpu/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public CpuDTO updateCpu(@PathVariable(name = "id") String id, @RequestBody CpuDTO cpuDTO){
        return edgeService.updateCpu(id, cpuDTO);
    }

    @GetMapping("/cpus")
    @ResponseStatus(HttpStatus.OK)
    public List<CpuDTO> getAllCpus(){
        return edgeService.getAllCpus();
    }

    @PostMapping("/graphics")
    @ResponseStatus(HttpStatus.CREATED)
    public GraphicsDTO addGraphics(@RequestBody GraphicsDTO graphicsDTO){
        return edgeService.addGraphics(graphicsDTO);
    }

    @GetMapping("/graphics/{id}")
    @ResponseStatus(HttpStatus.OK)
    public GraphicsDTO getGraphics(@PathVariable(name = "id") String id){
        return edgeService.getGraphics(id);
    }

    @PutMapping("/graphics/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public GraphicsDTO updateGraphics(@PathVariable(name = "id") String id, @RequestBody GraphicsDTO graphicsDTO){
        return edgeService.updateGraphics(id, graphicsDTO);
    }

    @GetMapping("/graphics")
    @ResponseStatus(HttpStatus.OK)
    public List<GraphicsDTO> getAllGraphics(){
        return edgeService.getAllGraphics();
    }

    @PostMapping("/laptop")
    @ResponseStatus(HttpStatus.CREATED)
    public LaptopDTONativo addLaptop(@RequestBody LaptopDTONativo laptopDTO){
        return edgeService.addLaptop(laptopDTO);
    }

    @GetMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.OK)
    public LaptopDTO getLaptop(@PathVariable(name = "id") String id){
        return edgeService.getLaptop(id);
    }

    @GetMapping("/laptops")
    @ResponseStatus(HttpStatus.OK)
    public List<LaptopDTO> getAllLaptops(){
        return edgeService.getAllLaptops();
    }

    @PutMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public LaptopDTONativo updateLaptop(@PathVariable(name = "id") String id, @RequestBody LaptopDTONativo laptopDTO){
        return edgeService.updateLaptop(id, laptopDTO);
    }

    @DeleteMapping("/laptop/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLaptop(@PathVariable(name = "id") String id){
        edgeService.deleteLaptop(id);
    }
}
