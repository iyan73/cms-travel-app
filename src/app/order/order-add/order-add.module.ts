import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './order-add.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogTravelModule } from '../dialog-travel/dialog-travel.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    OrderAddComponent
  ],
  exports: [
    OrderAddComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DialogTravelModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class OrderAddModule { }
