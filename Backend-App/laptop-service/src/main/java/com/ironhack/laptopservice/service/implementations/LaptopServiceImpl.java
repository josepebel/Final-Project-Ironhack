package com.ironhack.laptopservice.service.implementations;

import com.ironhack.laptopservice.controllers.dto.LaptopDTO;
import com.ironhack.laptopservice.model.Laptop;
import com.ironhack.laptopservice.repository.LaptopRepository;
import com.ironhack.laptopservice.service.interfaces.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@Service
public class LaptopServiceImpl implements LaptopService {

    @Autowired
    private LaptopRepository laptopRepository;

    public Laptop addLaptop(LaptopDTO laptopDTO){
        Laptop laptop = new Laptop();

        Optional<Laptop> optionalLaptop= laptopRepository.findByBrandAndModel(laptopDTO.getBrand(), laptopDTO.getModel());

        if(optionalLaptop.isPresent()){
            laptop = laptopRepository.findById(optionalLaptop.get().getId()).get();
        } else{
            laptop.setImage(laptopDTO.getImage());
            laptop.setBrand(laptopDTO.getBrand());
            laptop.setModel(laptopDTO.getModel());
            laptop.setPrice(laptopDTO.getPrice());
            laptop.setUrl(laptopDTO.getUrl());
            laptop.setFabricDate(laptopDTO.getFabricDate());
            laptop.setCpu(laptopDTO.getCpu());
            laptop.setRam(laptopDTO.getRam());
            laptop.setRom(laptopDTO.getRom());
            laptop.setGraphics(laptopDTO.getGraphics());
            laptop.setResolution(laptopDTO.getResolution());
            laptop.setOs(laptopDTO.getOs());
            laptop.setBattery(laptopDTO.getBattery());
            laptop.setWeight(laptopDTO.getWeight());
            laptopRepository.save(laptop);

        }
        return laptop;
    }

    public Laptop getLaptop(String id){
        Optional<Laptop> optionalLaptop = laptopRepository.findById(id);
        if(optionalLaptop.isPresent()){
            return optionalLaptop.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any laptop with this Id");
        }

    }

    public List<Laptop> getAllLaptops(){
        return laptopRepository.findAll();
    }

    public Laptop updateLaptop(String id, LaptopDTO laptopDTO){
        Optional<Laptop> optionalLaptop = laptopRepository.findById(id);
//        Optional<Laptop> optionalLaptopSearched = laptopRepository.findByBrandAndModel(laptopDTO.getBrand(), laptopDTO.getModel());

        if(optionalLaptop.isPresent()){
//            if(optionalLaptopSearched.isPresent()){
//                return optionalLaptopSearched.get();
//            } else {
                optionalLaptop.get().setImage(laptopDTO.getImage());
                optionalLaptop.get().setBrand(laptopDTO.getBrand());
                optionalLaptop.get().setModel(laptopDTO.getModel());
                optionalLaptop.get().setPrice(laptopDTO.getPrice());
                optionalLaptop.get().setUrl(laptopDTO.getUrl());
                optionalLaptop.get().setFabricDate(laptopDTO.getFabricDate());
                optionalLaptop.get().setCpu(laptopDTO.getCpu());
                optionalLaptop.get().setRam(laptopDTO.getRam());
                optionalLaptop.get().setRom(laptopDTO.getRom());
                optionalLaptop.get().setGraphics(laptopDTO.getGraphics());
                optionalLaptop.get().setResolution(laptopDTO.getResolution());
                optionalLaptop.get().setOs(laptopDTO.getOs());
                optionalLaptop.get().setBattery(laptopDTO.getBattery());
                optionalLaptop.get().setWeight(laptopDTO.getWeight());

                laptopRepository.save(optionalLaptop.get());
                return optionalLaptop.get();
//            }
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any laptop with this Id");
        }
    }



    public void deleteLaptop(String id) {
        Optional<Laptop> optionalLaptop = laptopRepository.findById(id);
        if(optionalLaptop.isPresent()){
            laptopRepository.delete(optionalLaptop.get());
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any laptop with this Id");
        }

    }
}
