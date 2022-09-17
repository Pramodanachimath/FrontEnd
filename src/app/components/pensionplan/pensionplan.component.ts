import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pensionplan } from 'src/app/models/pensionplan';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-pensionplan',
  templateUrl: './pensionplan.component.html',
  styleUrls: ['./pensionplan.component.scss']
})
export class PensionplanComponent implements OnInit {
pensionplans:Pensionplan[]=[]
pensionplanObs$!:Observable<Pensionplan[]>;
  
  
  constructor(private _pensionplanService:PensionplanService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map=>{
      let propertyName = map.get("property");
      let propertyValue = map.get("value");
      let pval = ''
      if(propertyValue){
        pval = propertyValue;
        console.log(pval);
    }
      // check if propertyName is purpose
      if(propertyName=='premium'){
        this._pensionplanService.getByPremium(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.pensionplans = data;
          }
        });
      }
      if(propertyName=='coverage'){
        this._pensionplanService.getByCoverage(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.pensionplans = data;
          }
        });
      }
    });
    this._pensionplanService.getPensionPlans().subscribe({
      next:(data)=>{
        console.log(`${data}`);
        this.pensionplans = data;
      },
      complete:()=>console.log(`completed`)
    })

    this. pensionplanObs$=this._pensionplanService.getPensionPlans();
  
  }
  show =(pensionplanId:number)=>{
    console.log(`id is ${pensionplanId}`);
    // call navigate method to move to another route
    // the url is like /investment-details/1 inthe browser
    // the route path  is like /investment-details/:id in the browser
    this._router.navigate(["/pensionplan-details",pensionplanId]);

  }
}
