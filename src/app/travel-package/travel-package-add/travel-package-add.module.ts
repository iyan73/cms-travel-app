import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelPackageAddComponent } from './travel-package-add.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    TravelPackageAddComponent
  ],
  exports: [
    TravelPackageAddComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class TravelPackageAddModule { }
