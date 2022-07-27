import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dataSource: any;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.load().subscribe(x => {
      console.log("x", x)
      this.dataSource = x
    });
  }

}
