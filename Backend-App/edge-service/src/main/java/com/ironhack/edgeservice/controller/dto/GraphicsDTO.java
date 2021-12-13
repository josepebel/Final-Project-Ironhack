package com.ironhack.edgeservice.controller.dto;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotEmpty;

public class GraphicsDTO {

    @Id
    private String id;
    @NotEmpty(message = "Graphics brand cannot a empty value")
    private String brand;
    @NotEmpty(message = "Graphics model cannot a empty value")
    private String model;

    public GraphicsDTO() {
    }

    public GraphicsDTO(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
