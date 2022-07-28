import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TravelPackageEditComponent } from './travel-package-edit.component';



@NgModule({
  declarations: [
    TravelPackageEditComponent
  ],
  exports: [
    TravelPackageEditComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class TravelPackageEditModule { }
