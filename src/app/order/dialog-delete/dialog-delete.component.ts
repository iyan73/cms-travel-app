import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  dataSource: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    private snackBar: MatSnackBar,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.loadOrderDetail(this.data.id).subscribe(x => {
      this.dataSource = x
    })
  }

  cancel(){
    this.dialogRef.close()
  }

}
