import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerService } from './customer.service';


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
    private cs: CustomerService
  ) { }

  ngOnInit(): void {
    this.cs.load().subscribe(x => {
      console.log("x", x)
      this.dataSource = x
    });

    // this.dataSource = this.cs.load().pipe(map(x => {
    //   console.log(x)
    //   return x
    // }))
  }

}
