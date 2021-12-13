import { Router } from '@angular/router';
import { Admin } from './../../../models/admin.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  currentAdmin: any = {
    adminID: "000001-LCA",
    password: "",
    email: "jose@laptcom.com",
    name: "Jose",
    lastname: "Peño",

  }


  constructor(private router: Router) { }

  ngOnInit() {

    this.getAdmin()
  }

  getAdmin() {
    // this.adminService.adminDetail().subscribe(
    //   (data) => {
    //     this.currentAdmin = data.data;
    //   },
    //   (error) => {
    //     console.log('Error:', error);
    //   }
    // );
  }


  updateAdmin(){

  //   delete this.currentAdmin['password']

  //   this.adminService.updateAdmin(this.currentAdmin).subscribe((data) => {
  //     this.router.navigate(['/dashboard/admin']);
  //   },
  //     error => {
  //       console.log("Error:", error);
  //     }
  //   );
  // }


}

}
