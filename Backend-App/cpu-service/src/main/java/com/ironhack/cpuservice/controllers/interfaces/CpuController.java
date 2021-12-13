package com.ironhack.cpuservice.controllers.interfaces;


import com.ironhack.cpuservice.controllers.dto.CpuDTO;
import com.ironhack.cpuservice.model.Cpu;

import java.util.List;

public interface CpuController {

    Cpu addCpu(CpuDTO cpuDTO);
    Cpu getCpu(String id);
    Cpu updateCpu(String id, CpuDTO CpuDTO);
    List<Cpu> getAllCpus();
}
