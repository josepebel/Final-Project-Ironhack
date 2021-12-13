package com.ironhack.ramservice.service.implementations;


import com.ironhack.ramservice.controllers.dto.RamDTO;
import com.ironhack.ramservice.model.Ram;
import com.ironhack.ramservice.repository.RamRepository;
import com.ironhack.ramservice.service.interfaces.RamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class RamServiceImpl implements RamService {

    @Autowired
    private RamRepository ramRepository;

    public Ram addRam(RamDTO ramDTO){
        Ram ram = new Ram();

        Optional<Ram> optionalRam= ramRepository.findByTypeAndSizeAndExpandSizeAndSpeed(ramDTO.getType(), ramDTO.getSize(),ramDTO.getExpandSize(), ramDTO.getSpeed());

        if(optionalRam.isPresent()){
            ram.setId(optionalRam.get().getId());
            ram.setType(optionalRam.get().getType());
            ram.setSize(optionalRam.get().getSize());
            ram.setExpandSize(optionalRam.get().getExpandSize());
            ram.setSpeed(optionalRam.get().getSpeed());
        } else{
            ram.setType(ramDTO.getType());
            ram.setSize(ramDTO.getSize());
            ram.setExpandSize(ramDTO.getExpandSize());
            ram.setSpeed(ramDTO.getSpeed());
            ramRepository.save(ram);

        }
        return ram;
    }

    public Ram getRam(String id){
        Optional<Ram> optionalRam = ramRepository.findById(id);
        if(optionalRam.isPresent()){
            return optionalRam.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any Ram with this Id");
        }

    }

    public Ram updateRam(String id, RamDTO ramDTO){
        Optional<Ram> optionalRam = ramRepository.findById(id);
        Optional<Ram> optionalRamSearched = ramRepository.findByTypeAndSizeAndExpandSizeAndSpeed(ramDTO.getType(), ramDTO.getSize(),ramDTO.getExpandSize(), ramDTO.getSpeed());

        if(optionalRam.isPresent()){
            if(optionalRamSearched.isPresent()){
                return optionalRamSearched.get();
            } else {
                optionalRam.get().setType(ramDTO.getType());
                optionalRam.get().setSize(ramDTO.getSize());
                optionalRam.get().setExpandSize(ramDTO.getExpandSize());
                optionalRam.get().setSpeed(ramDTO.getSpeed());

                ramRepository.save(optionalRam.get());
                return optionalRam.get();
            }
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any Ram with this Id");
        }
    }

    public List<Ram> getAllRams(){
        return ramRepository.findAll();
    }

}
