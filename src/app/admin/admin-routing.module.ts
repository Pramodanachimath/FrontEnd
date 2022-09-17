import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { AdminComponent } from './components/admin/admin.component';
import { DeleteInvestmentComponent } from './components/delete-investment/delete-investment.component';
import { UpdateInvestmentComponent } from './components/update-investment/update-investment.component';

const routes:Routes=[
  {path:'admin',component:AdminComponent,
children:[
  {path:'/addInvestment',component:AddInvestmentComponent},
  {path:'/updateInvestment',component:UpdateInvestmentComponent},
  {path:'/deleteInvestment',component:DeleteInvestmentComponent}
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
