import { LaptopService } from './../../services/laptop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from './../../models/laptop.model';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.scss']
})
export class LaptopsComponent implements OnInit {

  allLaptops: Array<any> = [];
  filterLaptops: Array<any> = [];

  arrayString!: string[]

  currentValues = [0, 0];
  allLaptopsFilteredPag: Array<any> = [];
  page!: number;
  prevPage!: number;
  nextPage!: number;
  totalPages!: number;
  pages: Array<number> = [];


 filter!: string;
 minPrice!: number;
 maxPrice!: number;
 cpu1!: string;
 cpu2!: string;
 cpuAMD!: string;
 cpuINTEL!: string;
 cpuMONE!: string;
 graphics1!: string;
 graphics2!: string;
 graphicsAMD!: string;
 graphicsNVIDIA!: string;
 graphicsINTEGRATED!: string;
 romHDD!: string;
 romSSD!: string;
 ram_typeTHREE!: string;
 ram_typeFOUR!: string;



 cpuAMDV!: Boolean;
 cpuINTELV!: Boolean;
 cpuMONEV!: Boolean;
 graphicsAMDV!: Boolean;
 graphicsNVIDIAV!: Boolean;
 graphicsINTEGRATEDV!: Boolean;
 romHDDV!: Boolean;
 romSSDV!: Boolean;
 ram_typeTHREEV!: Boolean;
 ram_typeFOURV!: Boolean;


  constructor(private activateRoute: ActivatedRoute, private router: Router,  private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.filter = ""
    this.minPrice = 0
    this.maxPrice = 5000
    this.cpu1 = ""
    this.cpu2 = ""
    this.cpuAMD = ""
    this.cpuINTEL = ""
    this.cpuMONE = ""
    this.graphics1 = ""
    this.graphics2 = ""
    this.graphicsAMD = ""
    this.graphicsNVIDIA = ""
    this.graphicsINTEGRATED = ""
    this.romHDD = ""
    this.romSSD = ""
    this.ram_typeTHREE = ""
    this.ram_typeFOUR = ""

    this.cpuAMDV = false
    this.cpuINTELV = false
    this.cpuMONEV = false
    this.graphicsAMDV = false
    this.graphicsNVIDIAV = false
    this.graphicsINTEGRATEDV = false
    this.romHDDV = false
    this.romSSDV = false
    this.ram_typeTHREEV = false
    this.ram_typeFOURV = false





    this.activateRoute.params.subscribe( params => {
      this.page = params.page
    })





    this.getFilter()
    this.getLaptops()
    this.getFilterLaptops()
    this.filterLaptopsName(this.filter)
    this.getPages();

    this.allLaptopsFilteredPag = this.allLaptops




  }



  getFilter(): void{
    this.activateRoute.queryParams.subscribe( value =>{
      if(value.filter != undefined){
      this.filter = value.filter}
      console.log(this.filter)
      console.log(this.allLaptops)
      console.log(this.filterLaptops)


    })
  }


  goToOne(){
    this.router.navigate(["/laptops/" + 1 ])

  }


  detailLaptop(id: any) {
    this.router.navigate(["laptop/" + id ])
    window.scroll(0, 0);
  }

  // getPullLaptops()  {
  //     this.laptopsService.getPaginationLaptops(this.page).subscribe(
  //       (data: Laptop[]) => {
  //         this.someLaptops = data;
  //         // console.log(data);
  //       },
  //       (error) => {
  //         console.log('Error:', error);
  //       }
  //     );
  // }


  getPages() {

    this.totalPages = Math.ceil(this.filterLaptops.length/9)
    this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    // this.laptopsService.getLaptops( this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
    //       (data: Laptop[]) => {
    //           this.allLaptopsFiltered = data;
    //           // console.log(this.allLaptopsFiltered)
    //           this.totalPages = Math.ceil(this.allLaptopsFiltered.length/12);
    //           this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    //           // console.log(this.pages)
    //       },
    //       (error: any) => {
    //           console.log('Error:', error);
    //       }
    //   );


    //   // if(this.page > this.totalPages){
    //   //   this.router.navigate(['/laptops/' + 1]);
    //   // }

    console.log(this.pages)

    this.allLaptopsFilteredPag =  this.filterLaptops.slice((this.page - 1) * 9 , this.page * 9)

    console.log(this.filterLaptops)
  }


  goPage(page: number) {
      this.router.navigate(['/laptops/' + page]);
      this.activateRoute.params.subscribe(params => {
          page = params.page;
          this.getFilterLaptops()
          this.getPages();



      })
      window.scroll(0, 0);
  }
  goNextPage() {
      if (this.page < this.totalPages) {
          this.nextPage = (parseInt(this.page + "") + 1)
          // console.log(this.nextPage)
          // console.log(this.page)
          this.goPage(this.nextPage)
      } else {
        this.goPage(this.totalPages)
      }
  }
  goPrevPage() {
      if (this.page > 1) {
          this.prevPage = this.page - 1
          this.goPage(this.prevPage)
      } else{
          this.goPage(1)
      }
  }



  // getFilterLaptops(){

  //   // this.laptopsService.getLaptopsPagination(this.page, this.filter, this.minPrice, this.maxPrice, this.cpuAMD, this.cpuINTEL, this.cpuMONE, this.graphicsAMD,this.graphicsNVIDIA, this.graphicsINTEGRATED, this.romHDD, this.romSSD, this.ram_typeTHREE, this.ram_typeFOUR).subscribe(
  //   //   (data: Laptop[]) => {
  //   //     this.someLaptops = data;
  //   //     // console.log(data);
  //   //   },
  //   //   (error) => {
  //   //     console.log('Error:', error);
  //   //   }
  //   // );
  // }


  getLaptops(){
    this.laptopService.getLaptops().subscribe((response: any)=>{

      this.allLaptops = response
      console.log(this.allLaptops)
      this.filterLaptops = response


      this.filterLaptopsName(this.filter)
      this.getPages()



    })
  }




  filterLaptopsName(filterName: string): void{

    if(filterName === ""){
      this.laptopService.getLaptops().subscribe((response: any)=>{

        this.filterLaptops = response

      })
    } else{
      this.filterLaptops = this.allLaptops.filter(laptop => (laptop["brand"]?.toLocaleLowerCase().includes(this.filter.toLowerCase()) || laptop["model"]?.toLocaleLowerCase().includes(this.filter.toLowerCase())))
      console.log(this.filterLaptops)

      this.allLaptopsFilteredPag = this.filterLaptops

    }

  }

  getFilterLaptops():void{

    if(this.romHDDV == true && this.romSSDV == true){
      this.romSSD = ""
      this.romHDD = ""
    } else if (this.romHDDV == false && this.romSSDV == true){
      this.romSSD = "SSD"
      this.romHDD = ""
    } else if (this.romHDDV == true && this.romSSDV == false){
      this.romSSD = ""
      this.romHDD = "HDD"
    } else if (this.romHDDV == false && this.romSSDV == false){
      this.romSSD = ""
      this.romHDD = ""
    }

    if(this.ram_typeTHREEV == true && this.ram_typeFOURV == true){
      this.ram_typeTHREE = ""
      this.ram_typeFOUR = ""
    } else if (this.ram_typeTHREEV == false && this.ram_typeFOURV == true){
      this.ram_typeTHREE = ""
      this.ram_typeFOUR = "DDR4"
    } else if (this.ram_typeTHREEV == true && this.ram_typeFOURV == false){
      this.ram_typeTHREE = "DDR3"
      this.ram_typeFOUR = ""
    } else if (this.ram_typeTHREEV == false && this.ram_typeFOURV == false){
      this.ram_typeTHREE = ""
      this.ram_typeFOUR = ""
    }


    if(this.graphicsAMDV == true && this.graphicsNVIDIAV == true && this.graphicsINTEGRATEDV == true){
      this.graphics1 = ""
      this.graphics2 = ""
    } else if (this.graphicsAMDV == true && this.graphicsNVIDIAV == true && this.graphicsINTEGRATEDV == false){
      this.graphics1 = "AMD"
      this.graphics2 = "NVIDIA"
    } else if (this.graphicsAMDV == true && this.graphicsNVIDIAV == false && this.graphicsINTEGRATEDV == true){
      this.graphics1 = "AMD"
      this.graphics2 = "INTEGRADA"
    } else if (this.graphicsAMDV == false && this.graphicsNVIDIAV == true && this.graphicsINTEGRATEDV == true){
      this.graphics1 = "NVIDIA"
      this.graphics2 = "INTEGRADA"
    } else if (this.graphicsAMDV == false && this.graphicsNVIDIAV == false && this.graphicsINTEGRATEDV == true){
      this.graphics1 = "INTEGRADA"
      this.graphics2 = "XXXYYY"
    } else if (this.graphicsAMDV == false && this.graphicsNVIDIAV == true && this.graphicsINTEGRATEDV == false){
      this.graphics1 = "NVIDIA"
      this.graphics2 = "XXXYYY"
    } else if (this.graphicsAMDV == true && this.graphicsNVIDIAV == false && this.graphicsINTEGRATEDV == false){
      this.graphics1 = "AMD"
      this.graphics2 = "XXXYYY"
    } else if (this.graphicsAMDV == false && this.graphicsNVIDIAV == false && this.graphicsINTEGRATEDV == false){
      this.graphics1 = ""
      this.graphics2 = ""
    }

    if(this.cpuAMDV == true && this.cpuINTELV == true && this.cpuMONEV == true){
      this.cpu1 = ""
      this.cpu2 = ""
    } else if (this.cpuAMDV == true && this.cpuINTELV == true && this.cpuMONEV == false){
      this.cpu1 = "INTEL"
      this.cpu2 = "AMD"
    } else if (this.cpuAMDV == true && this.cpuINTELV == false && this.cpuMONEV == true){
      this.cpu1 = "AMD"
      this.cpu2 = "M1"
    } else if (this.cpuAMDV == false && this.cpuINTELV == true && this.cpuMONEV == true){
      this.cpu1 = "INTEL"
      this.cpu2 = "M1"
    } else if (this.cpuAMDV == true && this.cpuINTELV == false && this.cpuMONEV == false){
      this.cpu1 = "AMD"
      this.cpu2 = "XXXYYY"
    } else if (this.cpuAMDV == false && this.cpuINTELV == true && this.cpuMONEV == false){
      this.cpu1 = "INTEL"
      this.cpu2 = "XXXYYY"
    } else if (this.cpuAMDV == false && this.cpuINTELV == false && this.cpuMONEV == true){
      this.cpu1 = "M1"
      this.cpu2 = "XXXYYY"
    }  else if (this.cpuAMDV == false && this.cpuINTELV == false && this.cpuMONEV == false){
      this.cpu1 = ""
      this.cpu2 = ""
    }


    this.arrayString = ["AMD", "NVIDIA", "INTEGRADA"]

    this.arrayString = this.arrayString.filter(string =>  string.includes("AMD") || string.includes("NVIDIA"))




     this.filterLaptops = this.allLaptops.filter(laptop => (laptop["brand"]?.toLowerCase().includes(this.filter.toLowerCase()) || laptop["model"]?.toLowerCase().includes(this.filter.toLowerCase()))
     && ((laptop.price) >= this.minPrice && (laptop.price) <= this.maxPrice)
     && (laptop["romType"]?.toLowerCase().includes(this.romSSD.toLowerCase()) && (laptop["romType"]?.toLowerCase().includes(this.romHDD.toLowerCase())))
     && (laptop["ramType"]?.toLowerCase().includes(this.ram_typeTHREE.toLowerCase()) && (laptop["ramType"]?.toLowerCase().includes(this.ram_typeFOUR.toLowerCase())))
     && (laptop["graphicsBrand"]?.toLowerCase().includes(this.graphics1.toLowerCase()) || (laptop["graphicsBrand"]?.toLowerCase().includes(this.graphics2.toLowerCase())))
     && (laptop["cpuName"]?.toLowerCase().includes(this.cpu1.toLowerCase()) || (laptop["cpuName"]?.toLowerCase().includes(this.cpu2.toLowerCase())))
     )


    console.log(this.filterLaptops)

  }







  onSearchChange(searchValue: any) {
    this.filter = searchValue.target.value
    this.filterLaptopsName(this.filter)
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()
 }

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;


    this.minPrice = this.currentValues[0]
    this.maxPrice = this.currentValues[1]
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()
}


  onCheckA(){

    this.cpuAMDV = !this.cpuAMDV

    if(this.cpuAMDV == true){
      this.cpuAMD = "AMD";
  } else{
    this.cpuAMD = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckB(){

    this.cpuINTELV = !this.cpuINTELV

    if(this.cpuINTELV == true){
      this.cpuINTEL = "Intel";
  } else{
    this.cpuINTEL = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()
  }

  onCheckC(){

    this.cpuMONEV = !this.cpuMONEV

    if(this.cpuMONEV == true){
      this.cpuMONE = "M1";
  } else{
    this.cpuMONE = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckD(){

    this.graphicsAMDV = !this.graphicsAMDV

    if(this.graphicsAMDV == true){
      this.graphicsAMD= "AMD";
  } else{
    this.graphicsAMD = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckE(){

    this.graphicsNVIDIAV = !this.graphicsNVIDIAV

    if(this.graphicsNVIDIAV == true){
      this.graphicsNVIDIA= "NVIDIA";
  } else{
    this.graphicsNVIDIA = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckF(){

    this.graphicsINTEGRATEDV = !this.graphicsINTEGRATEDV

    if(this.graphicsINTEGRATEDV == true){
      this.graphicsINTEGRATED= "integrada";
  } else{
    this.graphicsINTEGRATED = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckG(){

    this.ram_typeTHREEV = !this.ram_typeTHREEV

    if(this.ram_typeTHREEV == true){
      this.ram_typeTHREE= "DDR3";
  } else{
    this.ram_typeTHREE = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckH(){

    this.ram_typeFOURV = !this.ram_typeFOURV

    if(this.ram_typeFOURV == true){
      this.ram_typeFOUR= "DDR4";
  } else{
    this.ram_typeFOUR = ""
  }
    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckI(){

    this.romHDDV = !this.romHDDV

    if(this.romHDDV == true){
      this.romHDD= "HDD";
  } else{
    this.romHDD = ""
  }

    this.getFilterLaptops()
    this.getPages()
    this.goToOne()

  }

  onCheckJ(){

    this.romSSDV = !this.romSSDV

    if(this.romSSDV == true){
      this.romSSD= "SSD";
  } else{
    this.romSSD = ""
  }


    this.getFilterLaptops()
    this.getPages()
    this.goToOne()


  }


  // someLaptops: Array<Laptop>  = [
  //   {
  //     image: '../../../../assets/images/laptop1.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7588',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop2.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7589',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop1.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7585',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop2.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7587',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop1.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7586',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop2.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7580',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop1.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7581',
  //   },
  //   {
  //     image: '../../../../assets/images/laptop2.jpg',
  //     brand: 'Asus',
  //     model: 'Inspire+',
  //     price: 1000,
  //     fabric_date: '20/12/2021',
  //     cpu: 'Intel Core i5-10210U',
  //     cpu_core: 4,
  //     cpu_speed: 3.9,
  //     ram_type: 'DDR4 5DRAM',
  //     ram_speed: 2800,
  //     ram_size: 16,
  //     ram_expand: 4,
  //     graphics: 'NVIDIA GTX-1050',
  //     resolution: '1440x990',
  //     rom: '1 TB SSD',
  //     battery: 5550,
  //     os: 'Windows 10',
  //     weight: 2.5,
  //     _id: '606d5fc2b278be3fd63c7582',
  //   },
  // ];
}
