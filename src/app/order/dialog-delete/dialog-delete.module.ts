import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from './dialog-delete.component';



@NgModule({
  declarations: [
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class DialogDeleteModule { }
