import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { TravelPackageComponent } from './travel-package.component';



@NgModule({
  declarations: [
    TravelPackageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class TravelPackageModule { }
