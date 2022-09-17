import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pensionplan } from 'src/app/models/pensionplan';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-pensionplan-details',
  templateUrl: './pensionplan-details.component.html',
  styleUrls: ['./pensionplan-details.component.scss']
})
export class PensionplanDetailsComponent implements OnInit {

  planId:number=0;
 pensionplan!:Pensionplan;
  constructor(private _pensionplanService:PensionplanService,
              private _activatedRoute:ActivatedRoute   ) { }

              ngOnInit(): void {
                this._activatedRoute.paramMap.subscribe((map)=>{
                  // pass the key
                  let pid = map.get("id");
                  if(pid)
                    this.planId = parseInt(pid);
                });
                
                this._pensionplanService.getById(this.planId).subscribe({
                  next:(data)=>{
                    this.pensionplan =data;
                  }
                })
              }
            
            }
