import { NgModule } from '@angular/core';
import{HttpClientModule}from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PensionplanComponent } from './components/pensionplan/pensionplan.component';
import { PensionplanDetailsComponent } from './components/pensionplan-details/pensionplan-details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AddInvestmentComponent } from './admin/components/add-investment/add-investment.component';
import { UpdateInvestmentComponent } from './admin/components/update-investment/update-investment.component';
import { DeleteInvestmentComponent } from './admin/components/delete-investment/delete-investment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    PensionplanComponent,
    PensionplanDetailsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AgentDetailsComponent,
    SearchComponent,
    AdminComponent,
    AddInvestmentComponent,
    UpdateInvestmentComponent,
    DeleteInvestmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
