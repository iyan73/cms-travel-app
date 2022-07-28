import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { CustomerAddModule } from './customer-add/customer-add.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CustomerEditModule } from './customer-edit/customer-edit.module';
import { DialogDeleteModule } from './dialog-delete/dialog-delete.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CustomerAddModule,
    MatIconModule,
    MatButtonModule,
    CustomerEditModule,
    DialogDeleteModule,
    MatDialogModule
  ]
})
export class CustomerModule { }
