import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../order/order.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { OrderAddModule } from './order-add/order-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteModule } from './dialog-delete/dialog-delete.module';



@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    OrderAddModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DialogDeleteModule
  ]
})
export class OrderModule { }
