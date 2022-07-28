import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    private customerService : CustomerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close()
  }

  delete(){
    this.customerService.delete(this.data.id).subscribe(x => {
      if (x?.data){
        this.snackBar.open("Success delete data", "", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 5000
        })
        this.dialogRef.close('deleted')
      }
    })
  }

}
