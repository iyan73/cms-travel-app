import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../order/order.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class OrderModule { }
