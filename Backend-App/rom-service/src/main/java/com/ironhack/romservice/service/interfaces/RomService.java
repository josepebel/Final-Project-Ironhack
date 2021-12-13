package com.ironhack.romservice.service.interfaces;

import com.ironhack.romservice.controllers.dto.RomDTO;
import com.ironhack.romservice.model.Rom;

import java.util.List;

public interface RomService {

    Rom addRom(RomDTO romDTO);
    Rom getRom(String id);
    Rom updateRom(String id, RomDTO romDTO);
    List<Rom> getAllRoms();
}
