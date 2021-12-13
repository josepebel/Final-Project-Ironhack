package com.ironhack.cpuservice.service.interfaces;


import com.ironhack.cpuservice.controllers.dto.CpuDTO;
import com.ironhack.cpuservice.model.Cpu;

import java.util.List;

public interface CpuService {

    Cpu addCpu(CpuDTO cpuDTO);
    Cpu getCpu(String id);
    Cpu updateCpu(String id, CpuDTO CpuDTO);
    List<Cpu> getAllCpus();

}
