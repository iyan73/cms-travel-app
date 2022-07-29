import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dataSource: any;
  constructor(
    private orderService: OrderService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.orderService.load().subscribe(x => {
      this.dataSource = x
    });
  }

  add(){
    this.router.navigateByUrl('/order/add');
  }

  viewDetails(data:any){
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
