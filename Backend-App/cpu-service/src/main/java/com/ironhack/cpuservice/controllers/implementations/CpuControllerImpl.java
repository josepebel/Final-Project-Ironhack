package com.ironhack.cpuservice.controllers.implementations;


import com.ironhack.cpuservice.controllers.dto.CpuDTO;
import com.ironhack.cpuservice.controllers.interfaces.CpuController;
import com.ironhack.cpuservice.model.Cpu;
import com.ironhack.cpuservice.service.interfaces.CpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CpuControllerImpl implements CpuController {

    @Autowired
    CpuService cpuService;

    @PostMapping("/cpu")
    @ResponseStatus(HttpStatus.CREATED)
    public Cpu addCpu(@RequestBody CpuDTO cpuDTO){
        return cpuService.addCpu(cpuDTO);
    }

    @GetMapping("/cpu/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cpu getCpu(@PathVariable(name = "id") String id){
        return cpuService.getCpu(id);
    }

    @PutMapping("/cpu/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Cpu updateCpu(@PathVariable(name = "id") String id, @RequestBody CpuDTO cpuDTO){
        return cpuService.updateCpu(id, cpuDTO);
    }

    @GetMapping("/cpus")
    @ResponseStatus(HttpStatus.OK)
    public List<Cpu> getAllCpus(){
        return cpuService.getAllCpus();
    }
}
