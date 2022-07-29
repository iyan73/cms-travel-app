import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Location } from '@angular/common'
import { OrderService } from '../order.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogTravelComponent } from '../dialog-travel/dialog-travel.component';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit {

  orderForm = new FormGroup({
    invoice_number: new FormControl(''),
    total_price: new FormControl(0),
    order_details: new FormControl(''),
    customer_id: new FormControl(),
  });

  dataSource: any;
  selectedTravelPackages: any[] = []

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.customerService.load().subscribe(x => {
      this.dataSource = x
    });
  }

  save() {
    console.log(this.orderForm)
    let param = {
      data : {
        invoice_number: this.orderForm.controls['invoice_number'].value,
        total_price: this.orderForm.controls['total_price'].value,
        customer: [ Number(this.orderForm.controls['customer_id'].value) ]
      }
    }
    console.log(param)
    this.orderService.create(param).subscribe(x => {
      if (x?.data){
        this.saveOrderDetail(x)
      }
    })
  }

  saveOrderDetail(dataOrder:any){
    console.log("dataOrder", dataOrder)
    this.selectedTravelPackages.forEach(x => {
      let param = {
        data : {
          price: 900000,
          order: [dataOrder.data.id],
          travel_package: [x.id]
        }
      }

      this.orderService.createDetailOrder(param).subscribe(x => {
        console.log("createDetailOrder", x)
        if(x?.data){
          this.snackBar.open("Success save data", "", {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 5000
          })
          this.orderForm.reset()
          this.location.back();
        }
      })
    })
  }

  viewTravelPackage(data:any){
    const dialogRef = this.dialog.open(DialogTravelComponent, {
      data: data,
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        let isFound = this.selectedTravelPackages.find(x => x.id == result.id)
        if(isFound === undefined){
          this.orderForm.controls['total_price'].reset()
          this.selectedTravelPackages.push(result)
          this.selectedTravelPackages.forEach(x => {
            this.orderForm.controls['total_price'].setValue(this.orderForm.controls['total_price'].value + x.attributes.price)
          })
        }else{
          this.snackBar.open("Travel package already added", "", {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 5000
          })
        }
      }
    });
  }

  removeTravelPackage(data:any){
    this.selectedTravelPackages = this.selectedTravelPackages.filter(x => x.id !== data.id)
    this.orderForm.controls['total_price'].setValue(this.orderForm.controls['total_price'].value - data.attributes.price)
  }

}
