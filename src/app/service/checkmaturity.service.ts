import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maturity } from '../models/maturity';
import { Pensionplan } from '../models/pensionplan';

@Injectable({
  providedIn: 'root'
})
export class CheckmaturityService {
  baseurl = "http://localhost:8080/plans-api/plans"

  constructor(private _http:HttpClient) { }


  calculateMaturity = (year:number,age:number):Observable<number>=>{
    let url = this.baseurl.concat("/year/age/")+year+age;
    return this._http.get<number>(url);
  }
  
}

