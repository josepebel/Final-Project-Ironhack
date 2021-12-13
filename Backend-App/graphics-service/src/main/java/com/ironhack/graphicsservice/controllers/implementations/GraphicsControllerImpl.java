package com.ironhack.graphicsservice.controllers.implementations;


import com.ironhack.graphicsservice.controllers.dto.GraphicsDTO;
import com.ironhack.graphicsservice.controllers.interfaces.GraphicController;
import com.ironhack.graphicsservice.model.Graphics;
import com.ironhack.graphicsservice.service.interfaces.GraphicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GraphicsControllerImpl implements GraphicController {

    @Autowired
    GraphicsService graphicsService;

    @PostMapping("/graphics")
    @ResponseStatus(HttpStatus.CREATED)
    public Graphics addGraphics(@RequestBody GraphicsDTO graphicsDTO){
        return graphicsService.addGraphics(graphicsDTO);
    }

    @GetMapping("/graphics/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Graphics getGraphics(@PathVariable(name = "id") String id){
        return graphicsService.getGraphics(id);
    }

    @PutMapping("/graphics/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Graphics updateGraphics(@PathVariable(name = "id") String id, @RequestBody GraphicsDTO graphicsDTO){
        return graphicsService.updateGraphics(id, graphicsDTO);
    }

    @GetMapping("/graphics")
    @ResponseStatus(HttpStatus.OK)
    public List<Graphics> getAllGraphics(){
        return graphicsService.getAllGraphics();
    }
}
