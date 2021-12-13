import { LaptopService } from './../../../services/laptop.service';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { Laptop } from './../../../models/laptop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  isEditMode = false;
  id = '';
  laptop: any = {
    image: '',
    brand: '',
    model: '',
    price: 0,
    fabricDate: '',
    cpu:'',
    cpuName: '',
    cpuCores: 0,
    cpuSpeed: 0,
    ram:'',
    ramType: '',
    ramSpeed: 0,
    ramSize: 0,
    ramExpandSize: 0,
    graphics: '',
    graphicsBrand: '',
    graphicsModel: '',
    resolution: '',
    rom:'',
    romType: '',
    romCapacity: '',
    battery: 0,
    os: '',
    weight: 0,
    id: '',
  }

  laptopPost: any = {
    image: this.laptop.image,
    brand: this.laptop.brand,
    model: this.laptop.model,
    price: this.laptop.price,
    url: this.laptop.url,
    fabricDate: '',
    cpu:'',
    ram:'',
    graphics: '',
    resolution: this.laptop.resolution,
    rom:'',
    battery: this.laptop.battery,
    os: this.laptop.os,
    weight: this.laptop.weight,

  }

  ram: any = {
    id: this.laptop.ram,
    type: this.laptop.ramType,
    size: this.laptop.ramSize,
    expandSize: this.laptop.ramExpandSize,
    speed: this.laptop.ramSpeed
  }

  rom: any = {
    id: this.laptop.rom,
    type: this.laptop.romType,
    capacity: this.laptop.romCapacity
  }

  cpu: any = {
    id: this.laptop.id,
    name: this.laptop.cpuName,
    cores: this.laptop.cpuCores,
    speed: this.laptop.cpuSpeed

  }

  graphics: any = {
    id: this.laptop.graphics,
    brand: this.laptop.graphicsBrand,
    model: this.laptop.graphicsModel

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private laptopService: LaptopService
  ) {


    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        if (route.url.includes('change')) {
          this.isEditMode = true;
          this.id = this.route.snapshot.paramMap.get('id') || '';
          console.log(this.isEditMode);
        }
      }
    });


  }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
      if (this.isEditMode) {

        this.laptopService.getLaptop(this.id).subscribe((data) => {
          console.log(data)
          this.laptop = data
        },
          error => {
            console.log("Error:", error);
          }
        );
      } else {
        console.log("Estamos creando un laptop")
      }
      //   for (let i = 0; i < this.laptops.length; i++) {
      //     if (params.id == this.laptops[i]._id) {
      //       this.data = this.laptops[i];
      //     }
      //   }
      // } else {
      //   this.datan = {
      //     image: '',
      //     brand: '',
      //     model: '',
      //     price: 0,
      //     fabric_date: '',
      //     cpu: '',
      //     cpu_core: 0,
      //     cpu_speed: 0,
      //     ram_type: '',
      //     ram_speed: 0,
      //     ram_size: 0,
      //     ram_expand: 0,
      //     graphics: '',
      //     resolution: '',
      //     rom: '',
      //     hdmi: '',
      //     usb: '',
      //     battery: 0,
      //     os: '',
      //     weight: 0,
      //     valoration: 0,
      //     _id: '',
      //   };
      //}

  //   );
}



  saveLaptop() {

    this.ram = {
      id: this.laptop.ram,
      type: this.laptop.ramType,
      size: this.laptop.ramSize,
      expandSize: this.laptop.ramExpandSize,
      speed: this.laptop.ramSpeed
    }

    this.rom = {
      id: this.laptop.rom,
      type: this.laptop.romType,
      capacity: this.laptop.romCapacity
    }

    this.cpu = {
      id: this.laptop.id,
      name: this.laptop.cpuName,
      cores: this.laptop.cpuCores,
      speed: this.laptop.cpuSpeed

    }

    this.graphics = {
      id: this.laptop.graphics,
      brand: this.laptop.graphicsBrand,
      model: this.laptop.graphicsModel

    }





      // this.router.navigate(['/dashboard/control']);
      // this.location.back()


    this.laptopService.addRam(this.ram).subscribe(
      (data) => {
      this.ram.id =  data.id
      this.laptopPost.ram = data.id

      console.log(data);

      // this.router.navigate(['/dashboard/control']);
      // this.location.back()
    },
    (error) => {
      console.log('Error:', error);
    }
  );

  this.laptopService.addRom(this.rom).subscribe(
    (data) => {
    this.rom.id = data.id
    this.laptopPost.rom = data.id
    console.log(data);
    // this.router.navigate(['/dashboard/control']);
    // this.location.back()
  },
  (error) => {
    console.log('Error:', error);
  }
);

  this.laptopService.addCpu(this.cpu).subscribe(
    (data) => {
    this.cpu.id = data.id
    this.laptopPost.cpu = data.id
    console.log(data);
    // this.router.navigate(['/dashboard/control']);
    // this.location.back()
  },
  (error) => {
    console.log('Error:', error);
  }
  );

  this.laptopService.addGraphics(this.graphics).subscribe(
    (data) => {
    this.graphics = data
    this.laptopPost.graphics = data.id
    // console.log(data);
    // console.log(data.id)
    // console.log(this.graphics.id)
    // console.log(this.graphics)
    // this.router.navigate(['/dashboard/control']);
    // this.location.back()
  },
  (error) => {
    console.log('Error:', error);
  }
  );


  this.laptopPost = {
    image: this.laptop.image,
    brand: this.laptop.brand,
    model: this.laptop.model,
    price: this.laptop.price,
    url: this.laptop.url,
    fabricDate: '',
    cpu: this.cpu.id,
    ram:this.ram.id,
    graphics: this.graphics.id,
    resolution: this.laptop.resolution,
    rom:this.rom.id,
    battery: this.laptop.battery,
    os: this.laptop.os,
    weight: this.laptop.weight,

  }
  console.log(this.laptopPost)



  setTimeout(() =>
{


  this.laptopService.addLaptop(this.laptopPost).subscribe(
    (data) => {



  //   console.log(data);


  // console.log(this.laptopPost)
  // console.log(data)

},
(error) => {
  console.log('Error:', error);
}
);

this.router.navigate(['/dashboard/control']);

},
1000);


    // console.log(this.laptop)
    // console.log(this.ram)
    // console.log(this.rom)
    // console.log(this.cpu)


  }


  updateLaptop(){

    this.ram = {
      id: this.laptop.ram,
      type: this.laptop.ramType,
      size: this.laptop.ramSize,
      expandSize: this.laptop.ramExpandSize,
      speed: this.laptop.ramSpeed
    }

    this.rom = {
      id: this.laptop.rom,
      romType: this.laptop.romType,
      capacity: this.laptop.romCapacity
    }

    this.cpu = {
      id: this.laptop.cpu,
      cpuName: this.laptop.cpuName,
      cores: this.laptop.cpuCores,
      speed: this.laptop.cpuSpeed

    }

    this.graphics = {
      id: this.laptop.graphics,
      brand: this.laptop.graphicsBrand,
      model: this.laptop.graphicsModel

    }

    // this.laptopsService.updateLaptop(this.laptop).subscribe((data) => {
    //   this.router.navigate(['/dashboard/control']);
    // },
    //   error => {
    //     console.log("Error:", error);
    //   }
    // );

    console.log(this.rom)



    console.log(this.laptop)
    console.log(this.laptopPost)


      this.laptopService.updateRam(this.laptop.ram, this.ram).subscribe(
      (data) => {

        console.log(data)

        this.laptop.ram = data.id
        this.laptopPost.ram = data.id

      },
      (error) => {
        console.log('Error:', error);
      }
      );

    this.laptopService.updateRom(this.laptop.rom, this.rom).subscribe(
      (data) => {

        console.log(data)

        this.laptop.rom = data.id
        this.laptopPost.rom = data.id

      },
      (error) => {
        console.log('Error:', error);
      }
      );

    this.laptopService.updateCpu(this.laptop.cpu, this.cpu).subscribe(
      (data) => {

        console.log(data)

        this.laptop.cpu = data.id
        this.laptopPost.cpu = data.id

      },
      (error) => {
        console.log('Error:', error);
      }
      );

    this.laptopService.updateGraphics(this.laptop.graphics, this.graphics).subscribe(
      (data) => {

        console.log(data)

        this.laptop.graphics = data.id
        this.laptopPost.graphics = data.id

      },
      (error) => {
        console.log('Error:', error);
      }
      );


    this.laptopPost = {
      image: this.laptop.image,
      brand: this.laptop.brand,
      model: this.laptop.model,
      price: this.laptop.price,
      url: this.laptop.url,
      fabricDate: '',
      cpu: this.laptop.cpu,
      ram: this.laptop.ram,
      graphics: this.laptop.graphics,
      resolution: this.laptop.resolution,
      rom: this.laptop.rom,
      battery: this.laptop.battery,
      os: this.laptop.os,
      weight: this.laptop.weight,

    }


      console.log(this.laptop)
      console.log(this.laptopPost)



  setTimeout(() =>
  {


       this.laptopService.updateLaptop(this.id, this.laptopPost).subscribe(
      (data) => {

        console.log(data)

      },
      (error) => {
        console.log('Error:', error);
      }
      );


      this.router.navigate(['/dashboard/control']);


},
1000);

      console.log(this.ram)



    console.log(this.laptop)
    console.log(this.laptopPost)
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
