import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderComponent } from './order/order.component';
import { TravelPackageAddComponent } from './travel-package/travel-package-add/travel-package-add.component';
import { TravelPackageEditComponent } from './travel-package/travel-package-edit/travel-package-edit.component';
import { TravelPackageComponent } from './travel-package/travel-package.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent, pathMatch: 'full' },
  { path: 'customer/add', component: CustomerAddComponent },
  { path: 'customer/:id', component: CustomerEditComponent },
  { path: 'travel-package', component: TravelPackageComponent, pathMatch: 'full' },
  { path: 'travel-package/add', component: TravelPackageAddComponent, pathMatch: 'full' },
  { path: 'travel-package/:id', component: TravelPackageEditComponent, pathMatch: 'full' },
  { path: 'order', component: OrderComponent, },
  { path: 'order/add', component: OrderAddComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
