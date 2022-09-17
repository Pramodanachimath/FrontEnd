import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { UpdateInvestmentComponent } from './components/update-investment/update-investment.component';
import { DeleteInvestmentComponent } from './components/delete-investment/delete-investment.component';


@NgModule({
  declarations: [
    AdminComponent,
    AddInvestmentComponent,
    UpdateInvestmentComponent,
    DeleteInvestmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
