import { AdminComponent } from './components/dashboard/admin/admin.component';
import { EditionComponent } from './components/dashboard/edition/edition.component';
import { ControlComponent } from './components/dashboard/control/control.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginDashboardComponent } from './components/login-dashboard/login-dashboard.component';
import { CompareLaptopsComponent } from './components/compare-laptops/compare-laptops.component';
import { DetailLaptopComponent } from './components/detail-laptop/detail-laptop.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "laptops", redirectTo: "laptops/1", pathMatch:"full" },
  { path: "laptops/:page", component: LaptopsComponent },
  { path: "laptop/:id", component: DetailLaptopComponent },
  { path: "compare/:id1/:id2/:id3/:id4", component: CompareLaptopsComponent },
  { path: "compare/:id1/:id2/:id3", component: CompareLaptopsComponent },
  { path: "compare/:id1/:id2", component: CompareLaptopsComponent },
  { path: "dashboardlogin", component: LoginDashboardComponent },
  { path: "dashboard", component: DashboardComponent, children:[
      { path: "", redirectTo: "control/1", pathMatch: "full" },
      { path: "control", redirectTo: "control/1", pathMatch: "full" },
      { path: "control/:page", component: ControlComponent },
      { path: "edition/new", component: EditionComponent },
      { path: "edition", redirectTo: "edition/new", pathMatch: "full" },
      { path: "edition/change/:id", component: EditionComponent },
      { path: "admin", component: AdminComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
