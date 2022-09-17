import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pensionplan } from 'src/app/models/pensionplan';
import { CheckmaturityService } from 'src/app/service/checkmaturity.service';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-check-maturity',
  templateUrl: './check-maturity.component.html',
  styleUrls: ['./check-maturity.component.scss']
})
export class CheckMaturityComponent implements OnInit {

  pensionplans:Pensionplan[]=[]

   nyear=parseInt("year");
   namount=parseInt("amount");
    
  baseurl = "http://localhost:8080/plans-api/plans"
    
    constructor(private _checkmaturityService:CheckmaturityService,
      private _router:Router,
      private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
  }
 
  calculateMaturity =(year:number,age:number)=>{
   
    this._router.navigate(["/check-maturity-details",year,age]);

  }


}
