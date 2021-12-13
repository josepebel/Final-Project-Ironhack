import { ComparisonService } from '../../services/comparison.service';
import { LaptopService } from './../../services/laptop.service';
import { Laptop } from './../../models/laptop.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrls: ['./detail-laptop.component.scss']
})
export class DetailLaptopComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  laptop: any;

 constructor(private router: Router, private active: ActivatedRoute, private laptopService: LaptopService,  private comparisonService: ComparisonService) { }




  ngOnInit(): void {
      this.active.params.subscribe( params => {
       console.log(params.id);

        this.getLaptop(params.id)


    })

    this.laptop ={
      image: '',
      brand: '',
      model: '',
      price: 0,
      fabric_date: '',
      cpu: '',
      cpu_core: 0,
      cpu_speed: 0,
      ram_type: '',
      ram_speed: 0,
      ram_size: 0,
      ram_expand: 0,
      graphics: '',
      resolution: '',
      rom: '',
      battery: 0,
      os: '',
      weight: 0,
      _id: '',
    };
  }

  getLaptop(id: string){

    this.laptopService.getLaptop(id).subscribe((data) => {
      console.log(data)
      this.laptop = data
    },
      error => {
        console.log("Error:", error);
      }
    );


  }

  idToCompare!: string;

  toCompare(laptop_id: any){


    this.active.params.subscribe( value =>{
      this.idToCompare = value.id
      console.log(this.idToCompare)
     })
     this.newItemEvent.emit(laptop_id);
  }

  addLaptop(id: string): void {

      this.laptopService.getLaptop(id).subscribe((data) => {

        this.laptop = data
      },);
      this.comparisonService.addLaptops(this.laptop)
  }
  // formatDate(date?: any): string{
  //   return moment(date).format("DD/MM/YYYY")
  // }




}
