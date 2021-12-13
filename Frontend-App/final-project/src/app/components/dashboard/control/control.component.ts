import { LaptopService } from './../../../services/laptop.service';
import { Laptop } from './../../../models/laptop.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  page!: number;
  prePage!: number;
  postPage!: number;
  tenLaptops: Array<any> = [];

  constructor(private activateRoute: ActivatedRoute, private router: Router, private laptopService: LaptopService) { }
  // constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activateRoute.params.subscribe( params => {
        this.page = params.page
      })
      this.getLaptops()
      this.getPages()
      // console.log(this.page)
  }

  getEightLaptops() {

    // this.laptopsService.getSomeLaptops(this.page).subscribe(
    //   (data: Laptop[]) => {
    //     this.someLaptops = data;
    //     // console.log(data);
    //   },
    //   (error) => {
    //     console.log('Error:', error);
    //   }
    // );
  }

  getLaptops() {

    this.laptopService.getLaptops().subscribe((response: any)=>{

      this.allLaptops = response

      console.log(response)
      this.totalPages = Math.ceil(this.allLaptops.length/8)
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)

      this.tenLaptops =  this.allLaptops.slice((this.page - 1) * 10 , this.page * 10)

      console.log(this.tenLaptops)

    })
  }





  goPage(page: number) {

    this.router.navigate(['/dashboard/control/' + page]);
    this.activateRoute.params.subscribe( params => {
      page = params.page

      this.getPages()
      this.getLaptops();
    })



  }

  goPostPage() {

    if(this.page < this.totalPages){
    this.postPage = (parseInt(this.page + "") + 1)

    // console.log(this.postPage)
    // console.log(this.page)
    this.goPage(this.postPage)
  } else {
    this.goPage(this.totalPages)
  }

  }


  goPrePage() {

    if(this.page > 1){
  this.prePage = this.page - 1

  // console.log(this.prePage)
  // console.log(this.page)
  this.goPage(this.prePage)
}
  else{
    this.goPage(1)
  }


  }





  editLaptop(id: any) {
    this.router.navigate(["dashboard/edition/change/" + id ])
  }

  deleteLaptop(id: string) {
    this.laptopService.deleteLaptop(id).subscribe(data => {
      // console.log(data)

      this.getLaptops();
      this.getPages()
      this.router.navigate(["dashboard/control/1" ])

    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  totalPages!: number;
  pages: Array<number> = [];
  allLaptops: Array<any> = [];
  getPages(){
    this.totalPages = Math.ceil(this.allLaptops.length/8)
    console.log(this.totalPages)
    this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)


  }



 someLaptops: Array<Laptop>  = [
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
