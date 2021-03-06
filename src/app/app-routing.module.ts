import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'view-customer', pathMatch: 'full' },
  { path: 'view-customer', component: CustomerListComponent },
  { path: 'add-customer', component: AddCustomerComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
