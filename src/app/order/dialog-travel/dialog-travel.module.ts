import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTravelComponent } from './dialog-travel.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DialogTravelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class DialogTravelModule { }
