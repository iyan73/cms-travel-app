import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
  ) { }

  load(): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/customers`);
  }

  loadDetail(_id: any): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/customers/${_id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/api/customers`, data)
  }

  update(id:number, data: any): Observable<any> {
    return this.http.put(`${environment.baseURL}/api/customers/${id}`, data)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/api/customers/${id}`)
  }

}
