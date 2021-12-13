import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';

  constructor(private router: Router){


  }

  isLogin: boolean = false
  isCompare: boolean = false
  ngOnInit() {
    // const name = localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDZkYzJhMTJmYWU4ZTNjNjBkNjlhNGMiLCJpYXQiOjE2MTg4Mjg4MTAsImV4cCI6MTYxOTQzMzYxMH0.bJT5InthOzTkE_tLsTb3JcEQoeh9Vb-484xc2K0hhGA")

    this.router.events.subscribe (route=>{
      if(route instanceof NavigationEnd){

        // Rutas sin navbar ni footer
        let rutas = ["/login", "/register", "/dashboardlogin", "/dashboard", "/dashboard/control", "/dashboard/edition", "/dashboard/admin", "/dashboard/contact", "/compare"]

        for (let i = 0; i < rutas.length; i++) {
          if(route.url.includes(rutas[i])){
            this.isLogin = true
          }
        }
      }
    })

    this.router.events.subscribe (route=>{
      if(route instanceof NavigationEnd){

        // Rutas sin navbar ni footer
        let rutas = ["/compare"]

        for (let i = 0; i < rutas.length; i++) {
          if(route.url.includes(rutas[i])){
            this.isCompare= true
          }

        }

      }
    })
  }

  ngAfterContentInit() {
    this.router.events.subscribe (route=>{
      if(route instanceof NavigationEnd){


        if(route.url == "/" || route.url == "/laptops" || route.url == "/laptop"){
          this.isLogin = false
        }

      }
    })

}



  laptops: any[] = ["Prueba"];

  toCompare(newItem: any) {
    console.log(newItem)
    this.laptops.push(newItem);
    console.log(this.laptops)
  }

}
