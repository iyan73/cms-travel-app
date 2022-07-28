import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/components/navbar/navbar.module';
import { TravelPackageComponent } from './travel-package.component';
import { TravelPackageAddModule } from './travel-package-add/travel-package-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TravelPackageEditModule } from './travel-package-edit/travel-package-edit.module';
import { DialogDeleteModule } from './dialog-delete/dialog-delete.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    TravelPackageComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    TravelPackageAddModule,
    MatIconModule,
    MatButtonModule,
    TravelPackageEditModule,
    DialogDeleteModule,
    MatDialogModule
  ]
})
export class TravelPackageModule { }
