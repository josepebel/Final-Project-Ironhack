package com.ironhack.edgeservice.service.impl;


import com.ironhack.edgeservice.client.*;
import com.ironhack.edgeservice.controller.dto.*;
import com.ironhack.edgeservice.service.interfaces.EdgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EdgeServiceImpl implements EdgeService {

    @Autowired
    private RamClient ramClient;

    @Autowired
    private RomClient romClient;

    @Autowired
    private GraphicsClient graphicsClient;

    @Autowired
    private CpuClient cpuClient;

    @Autowired
    private LaptopClient laptopClient;


    public RamDTO addRam(RamDTO ramDTO){
        return ramClient.addRam(ramDTO);
    }

    public RamDTO getRam(String id){
        return ramClient.getRam(id);
    }

    public RamDTO updateRam(String id, RamDTO ramDTO){
        return ramClient.updateRam(id, ramDTO);
    }

    public List<RamDTO> getAllRams(){
        return ramClient.getAllRams();
    }

    public RomDTO addRom(RomDTO romDTO){
        return romClient.addRom(romDTO);
    }

    public RomDTO getRom(String id){
        return romClient.getRom(id);
    }

    public RomDTO updateRom(String id, RomDTO romDTO){
        return romClient.updateRom(id, romDTO);
    }

    public List<RomDTO> getAllRoms(){
        return romClient.getAllRoms();
    }

    public CpuDTO addCpu(CpuDTO cpuDTO){
        return cpuClient.addCpu(cpuDTO);
    }

    public CpuDTO getCpu(String id){
        return cpuClient.getCpu(id);
    }

    public CpuDTO updateCpu(String id, CpuDTO cpuDTO){
        return cpuClient.updateCpu(id, cpuDTO);
    }

    public List<CpuDTO> getAllCpus(){
        return cpuClient.getAllCpus();
    }

    public GraphicsDTO addGraphics(GraphicsDTO graphicsDTO){
        return graphicsClient.addGraphics(graphicsDTO);
    }

    public GraphicsDTO getGraphics(String id){
        return graphicsClient.getGraphics(id);
    }

    public GraphicsDTO updateGraphics(String id, GraphicsDTO graphicsDTO){
        return graphicsClient.updateGraphics(id, graphicsDTO);
    }

    public List<GraphicsDTO> getAllGraphics(){
        return graphicsClient.getAllGraphics();
    }

    public LaptopDTONativo addLaptop(LaptopDTONativo laptopDTO){
        return laptopClient.addLaptop(laptopDTO);
    }

    public LaptopDTO getLaptop(String id){
        LaptopDTO laptopDTO = new LaptopDTO();

        LaptopDTONativo laptopNativo = laptopClient.getLaptop(id);

        CpuDTO cpu = cpuClient.getCpu(laptopNativo.getCpu());
        RamDTO ram = ramClient.getRam(laptopNativo.getRam());
        RomDTO rom = romClient.getRom(laptopNativo.getRom());
        GraphicsDTO graphics = graphicsClient.getGraphics(laptopNativo.getGraphics());

        laptopDTO.setId(laptopNativo.getId());
        laptopDTO.setImage(laptopNativo.getImage());
        laptopDTO.setBrand(laptopNativo.getBrand());
        laptopDTO.setModel(laptopNativo.getModel());
        laptopDTO.setPrice(laptopNativo.getPrice());
        laptopDTO.setFabricDate(laptopNativo.getFabricDate());
        laptopDTO.setUrl(laptopNativo.getUrl());
        laptopDTO.setCpu(laptopNativo.getCpu());
        laptopDTO.setCpuName(cpu.getCpuName());
        laptopDTO.setCpuCores(cpu.getCores());
        laptopDTO.setCpuSpeed(cpu.getSpeed());
        laptopDTO.setRam(laptopNativo.getRam());
        laptopDTO.setRamType(ram.getType());
        laptopDTO.setRamSize(ram.getSize());
        laptopDTO.setRamExpandSize(ram.getExpandSize());
        laptopDTO.setRamSpeed(ram.getSpeed());
        laptopDTO.setRom(laptopNativo.getRom());
        laptopDTO.setRomType(rom.getRomType());
        laptopDTO.setRomCapacity(rom.getCapacity());
        laptopDTO.setGraphics(laptopNativo.getGraphics());
        laptopDTO.setGraphicsBrand(graphics.getBrand());
        laptopDTO.setGraphicsModel(graphics.getModel());
        laptopDTO.setResolution(laptopNativo.getResolution());
        laptopDTO.setBattery(laptopNativo.getBattery());
        laptopDTO.setOs(laptopNativo.getOs());
        laptopDTO.setWeight(laptopNativo.getWeight());

        return laptopDTO;
    }

    public List<LaptopDTO> getAllLaptops(){

        List<LaptopDTO> listLaptops = new ArrayList<>();

        List<RamDTO> ramDTOList = ramClient.getAllRams();

        List<String> ramIds = new ArrayList<>();

        for (int i = 0; i < ramDTOList.size(); i++) {
            ramIds.add(ramDTOList.get(i).getId());
        }

        List<RomDTO> romDTOList = romClient.getAllRoms();

        List<String> romIds = new ArrayList<>();

        for (int i = 0; i < romDTOList.size(); i++) {
            romIds.add(romDTOList.get(i).getId());
        }

        List<GraphicsDTO> graphicsDTOList = graphicsClient.getAllGraphics();

        List<String> graphicsIds = new ArrayList<>();

        for (int i = 0; i < graphicsDTOList.size(); i++) {
            graphicsIds.add(graphicsDTOList.get(i).getId());
        }

        List<CpuDTO> cpuDTOList = cpuClient.getAllCpus();

        List<String> cpusIds = new ArrayList<>();

        for (int i = 0; i < cpuDTOList.size(); i++) {
            cpusIds.add(cpuDTOList.get(i).getId());
        }

        List<LaptopDTONativo> laptopsNativos = laptopClient.getAllLaptops();

        for (int i = 0; i < laptopsNativos.size() ; i++) {
            LaptopDTO laptopDTO = new LaptopDTO();

            laptopDTO.setId(laptopsNativos.get(i).getId());
            laptopDTO.setImage(laptopsNativos.get(i).getImage());
            laptopDTO.setBrand(laptopsNativos.get(i).getBrand());
            laptopDTO.setModel(laptopsNativos.get(i).getModel());
            laptopDTO.setPrice(laptopsNativos.get(i).getPrice());
            laptopDTO.setFabricDate(laptopsNativos.get(i).getFabricDate());
            laptopDTO.setUrl(laptopsNativos.get(i).getUrl());
            laptopDTO.setCpu(laptopsNativos.get(i).getCpu());

            int positionCpu = cpusIds.indexOf(laptopsNativos.get(i).getCpu());

            laptopDTO.setCpuName(cpuDTOList.get(positionCpu).getCpuName());
            laptopDTO.setCpuCores(cpuDTOList.get(positionCpu).getCores());
            laptopDTO.setCpuSpeed(cpuDTOList.get(positionCpu).getSpeed());

            laptopDTO.setRam(laptopsNativos.get(i).getRam());

            int positionRam = ramIds.indexOf(laptopsNativos.get(i).getRam());

            laptopDTO.setRamType(ramDTOList.get(positionRam).getType());
            laptopDTO.setRamSize(ramDTOList.get(positionRam).getSize());
            laptopDTO.setRamExpandSize(ramDTOList.get(positionRam).getExpandSize());
            laptopDTO.setRamSpeed(ramDTOList.get(positionRam).getSpeed());


            laptopDTO.setRom(laptopsNativos.get(i).getRom());

            int positionRom = romIds.indexOf(laptopsNativos.get(i).getRom());

            laptopDTO.setRomType(romDTOList.get(positionRom).getRomType());
            laptopDTO.setRomCapacity(romDTOList.get(positionRom).getCapacity());


            laptopDTO.setGraphics(laptopsNativos.get(i).getGraphics());

            int positionGraphics = graphicsIds.indexOf(laptopsNativos.get(i).getGraphics());

            laptopDTO.setGraphicsBrand(graphicsDTOList.get(positionGraphics).getBrand());
            laptopDTO.setGraphicsModel(graphicsDTOList.get(positionGraphics).getModel());
            laptopDTO.setResolution(laptopsNativos.get(i).getResolution());
            laptopDTO.setBattery(laptopsNativos.get(i).getBattery());
            laptopDTO.setOs(laptopsNativos.get(i).getOs());
            laptopDTO.setWeight(laptopsNativos.get(i).getWeight());

            listLaptops.add(laptopDTO);
        }
        return listLaptops;
    }

    public LaptopDTONativo updateLaptop(String id, LaptopDTONativo laptopDTO){
        return laptopClient.updateLaptop(id, laptopDTO);
    }

    public void deleteLaptop(String id){
        laptopClient.deleteLaptop(id);
    }



}
