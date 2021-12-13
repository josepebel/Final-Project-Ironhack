package com.ironhack.edgeservice.client;

import com.ironhack.edgeservice.controller.dto.CpuDTO;
import com.ironhack.edgeservice.controller.dto.RamDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@FeignClient("cpu-service")
public interface CpuClient {

    @PostMapping("/cpu")
    CpuDTO addCpu(@RequestBody CpuDTO cpuDTO);

    @GetMapping("/cpu/{id}")
    CpuDTO getCpu(@PathVariable(name = "id") String id);

    @PutMapping("/cpu/{id}")
    CpuDTO updateCpu(@PathVariable(name = "id") String id, @RequestBody CpuDTO cpuDTO);

    @GetMapping("/cpus")
    List<CpuDTO> getAllCpus();
}
