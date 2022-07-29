import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
  ) { }

  load(): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/orders?populate[order_details][populate][0]=travel_packages`);
  }

  loadDetail(_id: any): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/orders/${_id}?populate=order_details`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/api/orders`, data)
  }

  update(id:number, data: any): Observable<any> {
    return this.http.put(`${environment.baseURL}/api/orders/${id}`, data)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/api/orders/${id}`)
  }

  createDetailOrder(data: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/api/order-details`, data)
  }
}
