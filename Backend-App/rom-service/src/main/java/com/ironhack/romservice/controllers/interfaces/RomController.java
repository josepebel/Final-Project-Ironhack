package com.ironhack.romservice.controllers.interfaces;

import com.ironhack.romservice.controllers.dto.RomDTO;
import com.ironhack.romservice.model.Rom;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface RomController {

    Rom addRom(RomDTO romDTO);
    Rom getRom(String id);
    Rom updateRom(String id, RomDTO romDTO);
    List<Rom> getAllRoms();
}
