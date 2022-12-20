import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  city:string="";
  area:string="";
  year!:number;
  month!:number;
  email:string="";

  constructor(private http:HttpClient) { }

  getAllConsumerBills():Observable<Bill[]> 
  {
    return this.http.get<Bill[]>("http://localhost:8080/consumers");
  }

  getConsumerBillsByCity():Observable<Bill[]> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("city",this.city);
    return this.http.get<Bill[]>("http://localhost:8080/consumers/city", {params:queryParams});
  }

  getConsumerBillsByArea():Observable<Bill[]> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("area",this.area);
    return this.http.get<Bill[]>("http://localhost:8080/consumers/area", {params:queryParams});
  }

  getConsumerBillsByYearAndMonth():Observable<Bill[]> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("year",this.year);
    queryParams = queryParams.append("month",this.month);
    return this.http.get<Bill[]>("http://localhost:8080/consumers/date", {params:queryParams});
  }

  getConsumerBillsByEmail():Observable<Bill[]> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",this.email);
    return this.http.get<Bill[]>("http://localhost:8080/consumers/bill", {params:queryParams});
  }

  // addConsumers():Observable<Consumer> 
  // {
  //   return this.http.post<Consumer>("http://localhost:8080/consumers", loginform.value);
  // }

  addBill(): Observable<Bill>
  {
    return this.http.post<Bill>("http://localhost:8080/bills", {
      "year":"2022",
      "month":"10",
      "unitsConsumed":"100",
      "consumer":{"consumerId":3,"consumerName":null,"city":null,"area":null,
      "planType":null,
      "password":null,"email":null,"bills":[],"admin":false}
    })
  }



}
