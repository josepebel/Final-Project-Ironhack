package com.ironhack.edgeservice.controller.interfaces;

import com.ironhack.edgeservice.controller.dto.*;

import java.util.List;

public interface EdgeController {

    RamDTO addRam(RamDTO ramDTO);
    RamDTO getRam(String id);
    RamDTO updateRam(String id, RamDTO ramDTO);
    List<RamDTO> getAllRams();

    RomDTO addRom(RomDTO romDTO);
    RomDTO getRom(String id);
    RomDTO updateRom(String id, RomDTO romDTO);
    List<RomDTO> getAllRoms();

    CpuDTO addCpu(CpuDTO cpuDTO);
    CpuDTO getCpu(String id);
    CpuDTO updateCpu(String id, CpuDTO CpuDTO);
    List<CpuDTO> getAllCpus();

    GraphicsDTO addGraphics(GraphicsDTO graphicsDTO);
    GraphicsDTO getGraphics(String id);
    GraphicsDTO updateGraphics(String id, GraphicsDTO graphicsDTO);
    List<GraphicsDTO> getAllGraphics();

    LaptopDTONativo addLaptop(LaptopDTONativo laptopDTO);
    LaptopDTO getLaptop(String id);
    LaptopDTONativo updateLaptop(String id, LaptopDTONativo laptopDTO);
    List<LaptopDTO> getAllLaptops();
    void deleteLaptop(String id);
}
