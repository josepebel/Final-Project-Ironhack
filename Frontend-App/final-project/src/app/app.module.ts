import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompareLaptopsComponent } from './components/compare-laptops/compare-laptops.component';
import { HomeComponent } from './components/home/home.component';
import { DetailLaptopComponent } from './components/detail-laptop/detail-laptop.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ControlComponent } from './components/dashboard/control/control.component';
import { EditionComponent } from './components/dashboard/edition/edition.component';
import { CartLaptopsComponent } from './components/cart-laptops/cart-laptops.component';
import { LoginComponent } from './components/login/login.component';
import { LoginDashboardComponent } from './components/login-dashboard/login-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NpnSliderModule } from 'npn-slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrollTopComponent,
    FooterComponent,
    CompareLaptopsComponent,
    HomeComponent,
    DetailLaptopComponent,
    LaptopsComponent,
    DashboardComponent,
    AdminComponent,
    ControlComponent,
    EditionComponent,
    CartLaptopsComponent,
    LoginComponent,
    LoginDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NpnSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
