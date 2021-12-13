
import { LaptopService } from './../../services/laptop.service';
import { ComparisonService } from '../../services/comparison.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from './../../models/laptop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-laptops',
  templateUrl: './compare-laptops.component.html',
  styleUrls: ['./compare-laptops.component.scss']
})
export class CompareLaptopsComponent implements OnInit {

  listaLaptops: Array<any> = [];
  laptop!: Laptop
  data!: any;
  constructor(private active: ActivatedRoute, private router: Router, private comparisonService: ComparisonService, private laptopService: LaptopService) { }


  ngOnInit(): void {
    this.active.params.subscribe( params => {
      this.data = params
    })

    console.log(this.data);

    if(this.data.id1)
    {this.getLaptop(this.data.id1)}

    if(this.data.id2)
    {this.getLaptop(this.data.id2)}

    if(this.data.id3)
    {this.getLaptop(this.data.id3)}

    if(this.data.id4)
    {this.getLaptop(this.data.id4)}

    console.log(this.listaLaptops)

}
  getLaptop(id: string){
    this.laptopService.getLaptop(id).subscribe((data) => {
      // console.log(data)
      this.laptop = data
      this.listaLaptops.push(this.laptop)
      console.log(this.laptop)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

  // formatDate(date?: any): string{
  //   return moment(date).format("DD/MM/YYYY")
  // }

  closeCompare() {
      this.router.navigate(["/"])
  }



}
