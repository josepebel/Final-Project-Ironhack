package com.ironhack.edgeservice.controller.dto;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotEmpty;

public class CpuDTO {
    @Id
    private String id;
    @NotEmpty(message = "Cpu name cannot a empty value")
    private String cpuName;
    @NotEmpty(message = "Cpu cores cannot a empty value")
    private int cores;
    @NotEmpty(message = "Cpu speed cannot a empty value")
    private double speed;

    public CpuDTO() {
    }

    public CpuDTO(String cpuName, int cores, double speed) {
        this.cpuName = cpuName;
        this.cores = cores;
        this.speed = speed;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCpuName() {
        return cpuName;
    }

    public void setCpuName(String cpuName) {
        this.cpuName = cpuName;
    }

    public int getCores() {
        return cores;
    }

    public void setCores(int cores) {
        this.cores = cores;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

}