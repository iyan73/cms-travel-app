import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { TravelPackageService } from './travel-package.service';

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.scss']
})
export class TravelPackageComponent implements OnInit {

  dataSource: any;
  constructor(
    private travelPackageService: TravelPackageService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.travelPackageService.load().subscribe(x => {
      this.dataSource = x
    });
  }

  add(){
    this.router.navigateByUrl('/travel-package/add');
  }

  edit(data: any){
    this.router.navigate([`/travel-package`, data.id]);
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
