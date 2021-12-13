package com.ironhack.ramservice.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;

@Document(collection = "ram")
public class Ram {

    @Id
    private String id;
    @NotEmpty(message = "Ram Type cannot a empty value")
    private String type;
    @NotEmpty(message = "Ram Size cannot a empty value")
    private int size;
    private int expandSize;
    @NotEmpty(message = "Ram Speed cannot a empty value")
    private double speed;

    public Ram() {
    }

    public Ram(String type, int size, int expandSize, double speed) {
        this.type = type;
        this.size = size;
        this.expandSize = expandSize;
        this.speed = speed;
    }

    public Ram(String type, int size, double speed) {
        this.type = type;
        this.size = size;
        this.speed = speed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getExpandSize() {
        return expandSize;
    }

    public void setExpandSize(int expandSize) {
        this.expandSize = expandSize;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }
}
