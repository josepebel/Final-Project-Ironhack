package com.ironhack.edgeservice.controller.dto;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

public class LaptopDTO {

    @Id
    private String id;
    @NotEmpty(message = "Image cannot a empty value")
    private String image;
    @NotEmpty(message = "Brand cannot a empty value")
    private String brand;
    @NotEmpty(message = "Model cannot a empty value")
    private String model;
    @NotEmpty(message = "Price cannot a empty value")
    @Digits(integer=8, fraction=2)
    private double price;
    @NotEmpty(message = "Url cannot a empty value")
    private String url;
    @NotEmpty(message = "Fabric date cannot a empty value")
    private LocalDate fabricDate;
    @NotEmpty(message = "Cpu cannot a empty value")
    private String cpu;
    @NotEmpty(message = "Cpu cannot a empty value")
    private String cpuName;
    @NotEmpty(message = "Cpu cannot a empty value")
    private int cpuCores;
    @NotEmpty(message = "Cpu cannot a empty value")
    private double cpuSpeed;
    @NotEmpty(message = "Ram cannot a empty value")
    private String ram;
    @NotEmpty(message = "Ram cannot a empty value")
    private String ramType;
    @NotEmpty(message = "Ram cannot a empty value")
    private int ramSize;
    @NotEmpty(message = "Rom cannot a empty value")
    private int ramExpandSize;
    @NotEmpty(message = "Ram cannot a empty value")
    private double ramSpeed;
    @NotEmpty(message = "Rom cannot a empty value")
    private String rom;
    @NotEmpty(message = "Rom cannot a empty value")
    private String romType;
    @NotEmpty(message = "Rom cannot a empty value")
    private int romCapacity;
    @NotEmpty(message = "Graphics cannot a empty value")
    private String graphics;
    @NotEmpty(message = "Graphics cannot a empty value")
    private String graphicsBrand;
    @NotEmpty(message = "Graphics cannot a empty value")
    private String graphicsModel;
    @NotEmpty(message = "Resolution cannot a empty value")
    private String resolution;
    @NotEmpty(message = "OS cannot a empty value")
    private String os;
    @NotEmpty(message = "Resolution cannot a empty value")
    @Digits(integer=6, fraction=0)
    private int battery;
    @NotEmpty(message = "Weight cannot a empty value")
    @Digits(integer=2, fraction=2)
    private double weight;




    public LaptopDTO() {
    }

    public LaptopDTO(String image, String brand, String model, double price, String url, LocalDate fabricDate, String cpu, String cpuName, int cpuCores, double cpuSpeed, String ram, String ramType, int ramSize, int ramExpandSize, double ramSpeed, String rom, String romType, int romCapacity, String graphics, String graphicsBrand, String graphicsModel, String resolution, String os, int battery, double weight) {
        this.image = image;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.url = url;
        this.fabricDate = fabricDate;
        this.cpu = cpu;
        this.cpuName = cpuName;
        this.cpuCores = cpuCores;
        this.cpuSpeed = cpuSpeed;
        this.ram = ram;
        this.ramType = ramType;
        this.ramSize = ramSize;
        this.ramExpandSize = ramExpandSize;
        this.ramSpeed = ramSpeed;
        this.rom = rom;
        this.romType = romType;
        this.romCapacity = romCapacity;
        this.graphics = graphics;
        this.graphicsBrand = graphicsBrand;
        this.graphicsModel = graphicsModel;
        this.resolution = resolution;
        this.os = os;
        this.battery = battery;
        this.weight = weight;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public LocalDate getFabricDate() {
        return fabricDate;
    }

    public void setFabricDate(LocalDate fabricDate) {
        this.fabricDate = fabricDate;
    }

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getRom() {
        return rom;
    }

    public void setRom(String rom) {
        this.rom = rom;
    }

    public String getGraphics() {
        return graphics;
    }

    public void setGraphics(String graphics) {
        this.graphics = graphics;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public int getBattery() {
        return battery;
    }

    public void setBattery(int battery) {
        this.battery = battery;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getRamSize() {
        return ramSize;
    }

    public void setRamSize(int ramSize) {
        this.ramSize = ramSize;
    }


    public String getCpuName() {
        return cpuName;
    }

    public void setCpuName(String cpuName) {
        this.cpuName = cpuName;
    }

    public int getCpuCores() {
        return cpuCores;
    }

    public void setCpuCores(int cpuCores) {
        this.cpuCores = cpuCores;
    }

    public double getCpuSpeed() {
        return cpuSpeed;
    }

    public void setCpuSpeed(double cpuSpeed) {
        this.cpuSpeed = cpuSpeed;
    }

    public String getRamType() {
        return ramType;
    }

    public void setRamType(String ramType) {
        this.ramType = ramType;
    }

    public int getRamExpandSize() {
        return ramExpandSize;
    }

    public void setRamExpandSize(int ramExpandSize) {
        this.ramExpandSize = ramExpandSize;
    }

    public double getRamSpeed() {
        return ramSpeed;
    }

    public void setRamSpeed(double ramSpeed) {
        this.ramSpeed = ramSpeed;
    }

    public String getRomType() {
        return romType;
    }

    public void setRomType(String romType) {
        this.romType = romType;
    }

    public int getRomCapacity() {
        return romCapacity;
    }

    public void setRomCapacity(int romCapacity) {
        this.romCapacity = romCapacity;
    }

    public String getGraphicsBrand() {
        return graphicsBrand;
    }

    public void setGraphicsBrand(String graphicsBrand) {
        this.graphicsBrand = graphicsBrand;
    }

    public String getGraphicsModel() {
        return graphicsModel;
    }

    public void setGraphicsModel(String graphicsModel) {
        this.graphicsModel = graphicsModel;
    }
}
