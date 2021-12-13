import { LaptopService } from './../../services/laptop.service';
import { Laptop } from './../../models/laptop.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  allLaptops: Array<any> = [];
  randomLaptops: Array<any> = [];
  sixLaptops: Array<any> = [];
  sixNumbers!: number[];


  constructor(private router: Router, private laptopService: LaptopService) {}
    ngOnInit(): void {
      this.getLaptops()

    }

    search(searchValue: string){


      if(searchValue == ""){
        this.router.navigate(["/laptops"])
      } else{
      this.router.navigate(["/laptops"], {queryParams: {filter: searchValue}})}


    }


    getSixRandom(): void{

      const rndInt = Math.floor(Math.random() * this.allLaptops.length);
      console.log(rndInt)

      if(rndInt > this.allLaptops.length - 1 - 6){
        this.randomLaptops = this.allLaptops.slice(this.allLaptops.length - 6)
      } else{
        this.randomLaptops = this.allLaptops.slice(rndInt, rndInt + 6)
      }
    }

    detailLaptop(id: any) {
      this.router.navigate(["laptop/" + id ])
      window.scroll(0, 0);
    }


    getLaptops(){
      this.laptopService.getLaptops().subscribe({
      next: dataResult => {
        this.allLaptops = dataResult;
      console.log(this.allLaptops)
      this.getSixRandom()

    }
    })

  }


    toGuideChooseLaptop() {
        this.router.navigate(["/guide-choose-laptop"])
    }


    bestLaptops: Array<Laptop>  = [
        {
          image: '../../../../assets/images/laptop1.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7588',
        },
        {
          image: '../../../../assets/images/laptop2.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7589',
        },
        {
          image: '../../../../assets/images/laptop1.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7585',
        },
        {
          image: '../../../../assets/images/laptop2.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7587',
        },
        {
          image: '../../../../assets/images/laptop1.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7586',
        },
        {
          image: '../../../../assets/images/laptop2.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7580',
        },
        {
          image: '../../../../assets/images/laptop1.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7581',
        },
        {
          image: '../../../../assets/images/laptop2.jpg',
          brand: 'Asus',
          model: 'Inspire+',
          price: 1000,
          fabric_date: '20/12/2021',
          cpu: 'Intel Core i5-10210U',
          cpu_core: 4,
          cpu_speed: 3.9,
          ram_type: 'DDR4 5DRAM',
          ram_speed: 2800,
          ram_size: 16,
          ram_expand: 4,
          graphics: 'NVIDIA GTX-1050',
          resolution: '1440x990',
          rom: '1 TB SSD',
          battery: 5550,
          os: 'Windows 10',
          weight: 2.5,
          _id: '606d5fc2b278be3fd63c7582',
        },
      ];


}
