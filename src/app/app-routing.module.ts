import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestmentComponent } from './admin/components/add-investment/add-investment.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { CheckMaturityDetailsComponent } from './components/check-maturity-details/check-maturity-details.component';
import { CheckMaturityComponent } from './components/check-maturity/check-maturity.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PensionplanDetailsComponent } from './components/pensionplan-details/pensionplan-details.component';
import { PensionplanComponent } from './components/pensionplan/pensionplan.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'contact',component:ContactusComponent},

{path:'checkMaturity',component:CheckMaturityComponent},
{path:'check-maturity-details/:year/:amount',component:CheckMaturityDetailsComponent},

{path:'plans',component:PensionplanComponent},
{path:'plans-details/:id',component:PensionplanDetailsComponent},

{path:'plans/:type',component:PensionplanComponent},
{path:'plans/:property/:value',component:PensionplanComponent},

{path:'admin',component:AdminComponent},


{path:'customer',component:CustomerComponent},
{path:'customer-details/:id',component:CustomerDetailsComponent},

{path:'',redirectTo:'/',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
