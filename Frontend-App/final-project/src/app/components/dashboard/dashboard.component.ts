import { Admin } from './../../models/admin.model';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LaptopsComponent } from '../laptops/laptops.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLogin: Boolean = false
  currentAdmin: any = {
    adminID: "000001-LCA",
    password: "",
    email: "jose@laptcom.com",
    name: "Jose",
    lastname: "Peño",

  }

  // constructor(private router: Router, public auth: AuthService, private adminService: AdminService) { }
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( route => {
      if (route instanceof NavigationEnd) {
        console.log(route.url)
      }
  })


  // this.adminService.adminDetail().subscribe((data) => {

  //   this.currentAdmin = data.data

  // },
  //   error => {
  //     console.log("Error:", error);
  //   }
  // );

  // // if (this.auth.isAuthenticated()) {
  // //   this.isLogin = true
  // //   const admin = localStorage.getItem('token')
  // //   console.log(admin)
  // //   this.currentAdmin = admin !== null ? JSON.parse(admin) : new Admin()

  // // }

}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/dashboardlogin']);
}
}
