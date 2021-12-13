package com.ironhack.graphicsservice.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;

@Document(collection = "graphics")
public class Graphics {

    @Id
    private String id;
    @NotEmpty(message = "Rom type cannot a empty value")
    private String brand;
    @NotEmpty(message = "Rom capacity cannot a empty value")
    private String model;

    public Graphics() {
    }

    public Graphics(String brand, String model) {
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
