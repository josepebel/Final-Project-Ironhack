import { Laptop } from './../models/laptop.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }


  readonly baseUrl = 'http://localhost:8080';


  getLaptops(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/laptops');
  }


  getLaptop(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/laptop/' + id);
  }


  addLaptop(laptop: any): Observable<any> {

    const body: any = {
      image: laptop.image,
      brand: laptop.brand,
      model: laptop.model,
      price: laptop.price,
      url: laptop.url,
      fabricDate: laptop.fabricDate,
      cpu: laptop.cpu,
      ram: laptop.ram,
      graphics: laptop.graphics,
      resolution: laptop.resolution,
      rom: laptop.rom,
      battery: laptop.battery,
      os: laptop.os,
      weight: laptop.weight,
    }

    return this.http.post<any>(this.baseUrl + `/laptop`, laptop);
  }

  addRam(ram: any): Observable<any> {

    const body: any = {
      id: ram.id,
      type: ram.type,
      size: ram.size,
      expandSize: ram.expandSize,
      speed: ram.speed,
    }

    return this.http.post<any>(this.baseUrl + `/ram`, body);
  }

  addRom(rom: any): Observable<any> {

    const body: any = {
      id: rom.id,
      romType: rom.type,
      capacity: rom.capacity,

    }

    return this.http.post<any>(this.baseUrl + `/rom`, body);
  }


  addCpu(cpu: any): Observable<any> {

    const body: any = {
      id: cpu.id,
      cpuName: cpu.name,
      cores: cpu.cores,
      speed: cpu.speed

    }

    return this.http.post<any>(this.baseUrl + `/cpu`, body);
  }


  addGraphics(graphics: any): Observable<any> {

    const body: any = {
      id: graphics.id,
      brand: graphics.brand,
      model: graphics.model

    }

    return this.http.post<any>(this.baseUrl + `/graphics`, body);
  }


  updateLaptop(laptopId: string, laptop: any): Observable<any>{

    return this.http.put<any>(this.baseUrl + `/laptop/${laptopId}`, laptop);
  }

  updateRam(laptopRamId: string, ram: any): Observable<any>{

    return this.http.put<any>(this.baseUrl + `/ram/${laptopRamId}`, ram);
  }

  updateRom(laptopRomId: string, rom: any): Observable<any>{

    return this.http.put<any>(this.baseUrl + `/rom/${laptopRomId}`, rom);
  }

  updateCpu(laptopCpuId: string, cpu: any): Observable<any>{

    return this.http.put<any>(this.baseUrl + `/cpu/${laptopCpuId}`, cpu);
  }

  updateGraphics(laptopGraphicsId: string, graphics: any): Observable<any>{

    return this.http.put<any>(this.baseUrl + `/graphics/${laptopGraphicsId}`, graphics);
  }


  deleteLaptop(laptopId: string): Observable<any>{

    return this.http.delete<any>(this.baseUrl + `/laptop/${laptopId}`);
  }




}
