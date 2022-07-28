import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { TravelPackageService } from '../travel-package.service';

@Component({
  selector: 'app-travel-package-edit',
  templateUrl: './travel-package-edit.component.html',
  styleUrls: ['./travel-package-edit.component.scss']
})
export class TravelPackageEditComponent implements OnInit {

  travelPackageForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private travelPackageService: TravelPackageService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.travelPackageService.loadDetail(params['id']).subscribe(x => {
        this.travelPackageForm.controls['id'].setValue(x.data.id)
        this.travelPackageForm.controls['name'].setValue(x.data.attributes.name)
        this.travelPackageForm.controls['price'].setValue(x.data.attributes.price)
        this.travelPackageForm.controls['description'].setValue(x.data.attributes.description)
      })
    });
  }

  update() {
    this.travelPackageService.update(this.travelPackageForm.controls['id'].value, { data: this.travelPackageForm.value }).subscribe(x => {
      if (x?.data){
        this.snackBar.open("Success update data", "", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 5000
        })
        this.location.back();
      }
    })
  }

}
