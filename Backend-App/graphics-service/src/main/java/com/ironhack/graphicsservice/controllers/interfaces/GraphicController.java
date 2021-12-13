package com.ironhack.graphicsservice.controllers.interfaces;

import com.ironhack.graphicsservice.controllers.dto.GraphicsDTO;
import com.ironhack.graphicsservice.model.Graphics;

import java.util.List;

public interface GraphicController {

    Graphics addGraphics(GraphicsDTO graphicsDTO);
    Graphics getGraphics(String id);
    Graphics updateGraphics(String id, GraphicsDTO graphicsDTO);
    List<Graphics> getAllGraphics();
}
