import { Component, OnInit } from '@angular/core';
import { TravelPackageService } from './travel-package.service';

@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.scss']
})
export class TravelPackageComponent implements OnInit {

  dataSource: any;
  constructor(
    private travelPackageService: TravelPackageService
  ) { }

  ngOnInit(): void {
    this.travelPackageService.load().subscribe(x => {
      console.log("x", x)
      this.dataSource = x
    });
  }

}
