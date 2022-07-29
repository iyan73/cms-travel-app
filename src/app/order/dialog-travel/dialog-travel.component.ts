import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TravelPackageService } from 'src/app/travel-package/travel-package.service';

@Component({
  selector: 'app-dialog-travel',
  templateUrl: './dialog-travel.component.html',
  styleUrls: ['./dialog-travel.component.scss']
})
export class DialogTravelComponent implements OnInit {

  dataSource: any;
  // travel = new FormControl('')
  travel: any;
  constructor(
    private travelPackageService: TravelPackageService,
    public dialogRef: MatDialogRef<DialogTravelComponent>,
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.travelPackageService.load().subscribe(x => {
      this.dataSource = x
    });
  }

  choose(){
    console.log(this.travel)
    this.dialogRef.close(this.travel)
  }

}
