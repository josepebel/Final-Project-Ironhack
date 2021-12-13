package com.ironhack.ramservice.controllers.interfaces;


import com.ironhack.ramservice.controllers.dto.RamDTO;
import com.ironhack.ramservice.model.Ram;

import java.util.List;

public interface RamController {

    Ram addRam(RamDTO ramDTO);
    Ram getRam(String id);
    Ram updateRam(String id, RamDTO ramDTO);
    List<Ram> getAllRams();
}
