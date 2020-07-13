import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private baseUrl = 'http://localhost:8000/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getCustomerList(): Observable<any> { 
    return this.http.get(`${this.baseUrl}`+'customers');  
  }  
  
  createCustomer(customer: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'customers/', customer);  
  }  
  
  deleteCustomer(code: string): Observable<any> {  
    return this.http.delete(`${this.baseUrl}`+`customers/${code}`, { responseType: 'text' });  
  }  
  
  getCustomer(code: string): Observable<Object> {  
    return this.http.get(`${this.baseUrl}`+`customers/${code}`);  
  }  
  
  updateCustomer(code: string, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`+`customers/${code}`, value);  
  }  
}
