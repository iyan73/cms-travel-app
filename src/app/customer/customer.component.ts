import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CustomerService } from './customer.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';


interface customerResponse {
  data: any;
  meta: any;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  // dataSource: Observable<any> | undefined;
  dataSource: any;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.customerService.load().subscribe(x => {
      this.dataSource = x
    });
  }

  add(){
    this.router.navigateByUrl('/customer/add');
  }

  edit(data: any){
    this.router.navigate([`/customer`, data.id]);
  }

  delete(data:any){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'deleted'){
        this.load();
      }
    });
  }

}
