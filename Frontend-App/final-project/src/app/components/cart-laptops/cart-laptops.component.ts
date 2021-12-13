import { ComparisonService } from './../../services/comparison.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Laptop } from './../../models/laptop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-laptops',
  templateUrl: './cart-laptops.component.html',
  styleUrls: ['./cart-laptops.component.scss']
})
export class CartLaptopsComponent implements OnInit {

  listLaptops: Array<any> = [];
    hidden: boolean = false
    empty: string = "There are no laptops in the comparison"

    alert!: boolean

    constructor(private active: ActivatedRoute, private router: Router, private comparisonService: ComparisonService) { }


    ngOnInit(): void {
        this.comparisonService.getLaptops$().subscribe(laptops => {
                this.listLaptops = laptops
                console.log(this.listLaptops)
        })
        this.router.events.subscribe( route => {

          if(route instanceof NavigationEnd) {
            if(route.url == "/about-us" || route.url == "/privacy-policy" || route.url == "/legal-notice") {
              this.hidden = true
            } else {
                this.hidden = false
            }
          }

        })
    }


    compareLaptops() {


      if(this.listLaptops.length == 4){
      this.router.navigate(["compare/" + this.listLaptops[0].id + "/" + this.listLaptops[1].id + "/" + this.listLaptops[2].id + "/" + this.listLaptops[3].id])
      console.log(this.listLaptops)
      window.scroll(0, 0);

      this.alert = false
      }

      if(this.listLaptops.length == 3){
        this.router.navigate(["compare/" + this.listLaptops[0].id + "/" + this.listLaptops[1].id + "/" + this.listLaptops[2].id ])
        console.log(this.listLaptops)
        window.scroll(0, 0);

        this.alert = false
      }

      if(this.listLaptops.length == 2){
        this.router.navigate(["compare/" + this.listLaptops[0].id + "/" + this.listLaptops[1].id  ])
        console.log(this.listLaptops)
        window.scroll(0, 0);

        this.alert = false
      }

      if(this.listLaptops.length <2 ){
        this.alert = false
        return

      }

      if(this.listLaptops.length > 4 ){
        this.alert = true
        return
      }

    }

    deleteLaptop(laptop: Laptop) {
        this.comparisonService.delLaptops(laptop)
        if(this.listLaptops.length > 4 ){
          this.alert = true
          return
        } else{this.alert = false}



    }


}
