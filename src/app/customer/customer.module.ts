import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class CustomerModule { }
