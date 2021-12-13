package com.ironhack.cpuservice.service.implementations;


import com.ironhack.cpuservice.controllers.dto.CpuDTO;
import com.ironhack.cpuservice.model.Cpu;
import com.ironhack.cpuservice.repository.CpuRepository;
import com.ironhack.cpuservice.service.interfaces.CpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CpuServiceImpl implements CpuService {

    @Autowired
    private CpuRepository cpuRepository;

    public Cpu addCpu(CpuDTO cpuDTO){
        Cpu cpu = new Cpu();

        Optional<Cpu> optionalCpu= cpuRepository.findByCpuNameAndCoresAndSpeed(cpuDTO.getCpuName(), cpuDTO.getCores(), cpuDTO.getSpeed());

        if(optionalCpu.isPresent()){
            cpu.setId(optionalCpu.get().getId());
            cpu.setCpuName(optionalCpu.get().getCpuName());
            cpu.setCores(optionalCpu.get().getCores());
            cpu.setSpeed(optionalCpu.get().getSpeed());
        } else{
            cpu.setCpuName(cpuDTO.getCpuName());
            cpu.setCores(cpuDTO.getCores());
            cpu.setSpeed(cpuDTO.getSpeed());
            cpuRepository.save(cpu);

        }
        return cpu;
    }

    public Cpu getCpu(String id){
        Optional<Cpu> optionalCpu = cpuRepository.findById(id);
        if(optionalCpu.isPresent()){
            return optionalCpu.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any Cpu with this Id");
        }

    }

    public Cpu updateCpu(String id, CpuDTO cpuDTO){
        Optional<Cpu> optionalCpu = cpuRepository.findById(id);
        Optional<Cpu> optionalCpuSearched = cpuRepository.findByCpuNameAndCoresAndSpeed(cpuDTO.getCpuName(), cpuDTO.getCores(), cpuDTO.getSpeed());

        if(optionalCpu.isPresent()){
            if(optionalCpuSearched.isPresent()){
                return optionalCpuSearched.get();
            } else {
                optionalCpu.get().setCpuName(cpuDTO.getCpuName());
                optionalCpu.get().setCores(cpuDTO.getCores());
                optionalCpu.get().setSpeed(cpuDTO.getSpeed());

                cpuRepository.save(optionalCpu.get());
                return optionalCpu.get();
            }
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any Cpu with this Id");
        }
    }

    public List<Cpu> getAllCpus(){
        return cpuRepository.findAll();
    }

}
