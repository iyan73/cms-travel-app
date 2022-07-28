import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common'
import { TravelPackageService } from '../travel-package.service';

@Component({
  selector: 'app-travel-package-add',
  templateUrl: './travel-package-add.component.html',
  styleUrls: ['./travel-package-add.component.scss']
})
export class TravelPackageAddComponent implements OnInit {

  travelPackageForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private travelPackageService: TravelPackageService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.travelPackageService.create({ data: this.travelPackageForm.value }).subscribe(x => {
      if (x?.data){
        this.snackBar.open("Success save data", "", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 5000
        })
        this.travelPackageForm.reset()
        this.location.back();
      }
    })
  }

}
