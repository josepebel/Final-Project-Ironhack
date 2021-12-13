package com.ironhack.graphicsservice.service.interfaces;

import com.ironhack.graphicsservice.controllers.dto.GraphicsDTO;
import com.ironhack.graphicsservice.model.Graphics;

import java.util.List;

public interface GraphicsService {

    Graphics addGraphics(GraphicsDTO graphicsDTO);
    Graphics getGraphics(String id);
    Graphics updateGraphics(String id, GraphicsDTO graphicsDTO);
    List<Graphics> getAllGraphics();
}
