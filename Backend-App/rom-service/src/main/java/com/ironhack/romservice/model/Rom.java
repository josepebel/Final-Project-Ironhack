package com.ironhack.romservice.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;

@Document(collection = "rom")
public class Rom {

    @Id
    private String id;
    @NotEmpty(message = "Rom type cannot a empty value")
    private String romType;
    @NotEmpty(message = "Rom capacity cannot a empty value")
    private int capacity;

    public Rom() {
    }

    public Rom(String romType, int capacity) {
        this.romType = romType;
        this.capacity = capacity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRomType() {
        return romType;
    }

    public void setRomType(String romType) {
        this.romType = romType;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
