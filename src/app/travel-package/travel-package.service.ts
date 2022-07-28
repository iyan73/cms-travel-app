import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelPackageService {

  constructor(
    private http: HttpClient,
  ) { }

  load(): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/travel-packages`);
  }

  loadDetail(_id: any): Observable<any>{
    return this.http.get(`${environment.baseURL}/api/travel-packages/${_id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.baseURL}/api/travel-packages`, data)
  }

  update(id:number, data: any): Observable<any> {
    return this.http.put(`${environment.baseURL}/api/travel-packages/${id}`, data)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.baseURL}/api/travel-packages/${id}`)
  }
}
