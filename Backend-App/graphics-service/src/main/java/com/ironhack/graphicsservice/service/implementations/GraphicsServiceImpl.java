package com.ironhack.graphicsservice.service.implementations;


import com.ironhack.graphicsservice.controllers.dto.GraphicsDTO;
import com.ironhack.graphicsservice.model.Graphics;
import com.ironhack.graphicsservice.repository.GraphicsRepository;
import com.ironhack.graphicsservice.service.interfaces.GraphicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class GraphicsServiceImpl implements GraphicsService{

    @Autowired
    private GraphicsRepository graphicsRepository;

    public Graphics addGraphics(GraphicsDTO graphicsDTO){
        Graphics graphics = new Graphics();

        Optional<Graphics> optionalGraphics= graphicsRepository.findByBrandAndModel(graphicsDTO.getBrand(), graphicsDTO.getModel());

        if(optionalGraphics.isPresent()){
            graphics.setId(optionalGraphics.get().getId());
            graphics.setBrand(optionalGraphics.get().getBrand());
            graphics.setModel(optionalGraphics.get().getModel());
        } else{
            graphics.setBrand(graphicsDTO.getBrand());
            graphics.setModel(graphicsDTO.getModel());
            graphicsRepository.save(graphics);

        }
        return graphics;
    }

    public Graphics getGraphics(String id){
        Optional<Graphics> optionalGraphics = graphicsRepository.findById(id);
        if(optionalGraphics.isPresent()){
            return optionalGraphics.get();
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any graphics with this Id");
        }

    }

    public Graphics updateGraphics(String id, GraphicsDTO graphicsDTO){
        Optional<Graphics> optionalGraphics = graphicsRepository.findById(id);
        Optional<Graphics> optionalGraphicsSearched = graphicsRepository.findByBrandAndModel(graphicsDTO.getBrand(), graphicsDTO.getModel());

        if(optionalGraphics.isPresent()){
            if(optionalGraphicsSearched.isPresent()){
                return optionalGraphicsSearched.get();
            } else {
                optionalGraphics.get().setBrand(graphicsDTO.getBrand());
                optionalGraphics.get().setModel(graphicsDTO.getModel());

                graphicsRepository.save(optionalGraphics.get());
                return optionalGraphics.get();
            }
        } else{
            throw new ResponseStatusException(HttpStatus.NOT_FOUND ,"It does not exist any graphics with this Id");
        }
    }

    public List<Graphics> getAllGraphics(){
        return graphicsRepository.findAll();
    }

}
