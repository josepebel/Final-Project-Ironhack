package com.ironhack.edgeservice.client;

import com.ironhack.edgeservice.controller.dto.GraphicsDTO;
import com.ironhack.edgeservice.controller.dto.RamDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@FeignClient("GRAPHICS-service")
public interface GraphicsClient {



    @PostMapping("/graphics")
    GraphicsDTO addGraphics(@RequestBody GraphicsDTO graphicsDTO);

    @GetMapping("/graphics/{id}")
    GraphicsDTO getGraphics(@PathVariable(name = "id") String id);

    @PutMapping("/graphics/{id}")
    GraphicsDTO updateGraphics(@PathVariable(name = "id") String id, @RequestBody GraphicsDTO graphicsDTO);

    @GetMapping("/graphics")
    List<GraphicsDTO> getAllGraphics();
}
