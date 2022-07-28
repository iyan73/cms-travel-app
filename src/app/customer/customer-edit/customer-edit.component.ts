import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerService.loadDetail(params['id']).subscribe(x => {
        this.customerForm.controls['id'].setValue(x.data.id)
        this.customerForm.controls['name'].setValue(x.data.attributes.name)
        this.customerForm.controls['email'].setValue(x.data.attributes.email)
        this.customerForm.controls['phone'].setValue(x.data.attributes.phone)
        this.customerForm.controls['address'].setValue(x.data.attributes.address)
      })
    });
  }

  update() {
    this.customerService.update(this.customerForm.controls['id'].value, { data: this.customerForm.value }).subscribe(x => {
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
