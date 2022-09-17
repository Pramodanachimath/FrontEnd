import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maturity } from 'src/app/models/maturity';
import { Pensionplan } from 'src/app/models/pensionplan';
import { CheckmaturityService } from 'src/app/service/checkmaturity.service';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-check-maturity-details',
  templateUrl: './check-maturity-details.component.html',
  styleUrls: ['./check-maturity-details.component.scss']
})
export class CheckMaturityDetailsComponent implements OnInit {

 
  year:number=0;
  age:number=0;

 maturity!:number;
  constructor(private _checkmaturityService:CheckmaturityService,
              private _activatedRoute:ActivatedRoute   ) { }

              ngOnInit(): void {
                this._activatedRoute.paramMap.subscribe((map)=>{
                  // pass the key
                  let nyear = map.get("year");
                  let nage = map.get("age");

                  if(nyear)
                    this.year = parseInt(nyear);
                    if(nage)
                    this.age = parseInt(nage);

                });
                
                this._checkmaturityService.calculateMaturity(this.year,this.age).subscribe({
                  next:(data)=>{
                    this.maturity=data;

                  }
                })
              }
            
            }
