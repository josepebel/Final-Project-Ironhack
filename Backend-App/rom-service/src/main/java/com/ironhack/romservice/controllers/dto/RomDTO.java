package com.ironhack.romservice.controllers.dto;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotEmpty;

public class RomDTO {

    @Id
    private String id;
    @NotEmpty(message = "Rom type cannot a empty value")
    private String romType;
    @NotEmpty(message = "Rom capacity cannot a empty value")
    private int capacity;

    public RomDTO() {
    }

    public RomDTO(String romType, int capacity) {
        this.romType = romType;
        this.capacity = capacity;
    }

    public String getId() {
        return id;
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
