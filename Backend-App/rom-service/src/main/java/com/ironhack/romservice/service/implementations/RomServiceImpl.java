package com.ironhack.romservice.service.implementations;


import com.ironhack.romservice.controllers.dto.RomDTO;
import com.ironhack.romservice.model.Rom;
import com.ironhack.romservice.repository.RomRepository;
import com.ironhack.romservice.service.interfaces.RomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class RomServiceImpl implements RomService {

    @Autowired
    private RomRepository romRepository;

    public Rom addRom(RomDTO romDTO){
        Rom rom = new Rom();

        Optional<Rom> optionalRom= romRepository.findByRomTypeAndCapacity(romDTO.getRomType(), romDTO.getCapacity());

        if(optionalRom.isPresent()){
            rom.setId(optionalRom.get().getId());
            rom.setRomType(optionalRom.get().getRomType());
            rom.setCapacity(optionalRom.get().getCapacity());
        } else{
            rom.setRomType(romDTO.getRomType());
            rom.setCapacity(romDTO.getCapacity());
            romRepository.save(rom);

        }
        return rom;
    }

    public Rom getRom(String id){
        Optional<Rom> optionalRom = romRepository.findById(id);
        if(optionalRom.isPresent()){
            return optionalRom.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any rom with this Id");
        }

    }

    public Rom updateRom(String id, RomDTO romDTO){
        Optional<Rom> optionalRom = romRepository.findById(id);
        Optional<Rom> optionalRomSearched = romRepository.findByRomTypeAndCapacity(romDTO.getRomType(), romDTO.getCapacity());

        if(optionalRom.isPresent()){
            if(optionalRomSearched.isPresent()){
                return optionalRomSearched.get();
            } else {
                optionalRom.get().setRomType(romDTO.getRomType());
                optionalRom.get().setCapacity(romDTO.getCapacity());

                romRepository.save(optionalRom.get());
                return optionalRom.get();
            }
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any rom with this Id");
        }
    }


    public List<Rom> getAllRoms(){
        return romRepository.findAll();
    }

}
