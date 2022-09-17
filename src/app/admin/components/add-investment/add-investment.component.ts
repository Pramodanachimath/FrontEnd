import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pensionplan } from 'src/app/models/pensionplan';
import { PensionplanService } from 'src/app/service/pensionplan.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  pensionplan: Pensionplan = {
    planName: '',
    planId: 0,
    age: 0,
    term:'',
    premium: 0,
    amount:0,
    coverage:'',
  }

  constructor(private _pensionplanService:PensionplanService) { }

  ngOnInit(): void {
  }

  onSubmit=(addForm:NgForm)=>{
    console.log(addForm.value);
    console.log(this.pensionplan);
    this._pensionplanService.addInvestment(this.pensionplan).subscribe({
      next:(data)=>{
        console.log(data);
      }
    })

  }

}