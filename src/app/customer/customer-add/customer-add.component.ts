import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common'

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  customerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.customerService.create({ data: this.customerForm.value }).subscribe(x => {
      if (x?.data){
        this.snackBar.open("Success save data", "", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 5000
        })
        this.customerForm.reset()
        this.location.back();
      }
    })
  }

}
