import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureComponent} from './components/feature/feature.component';
import {ContactComponent} from './components/contactus/contact.component';
import {PrepareshipmentComponent} from './components/prepareshipment/prepareshipment.component';
import { HomeComponent } from './components/home/home.component';
import {SideBarMenuComponent} from './components/layout/sidebarmenu/sidebarmenu.component';
import {AccountingComponent} from './components/accounting/accounting.component';
import {PickupComponent} from './components/pickup/pickup.component';
import {CouriersheetComponent} from './components/couriersheets/couriersheet.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeatureComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doc', component: SideBarMenuComponent},
  {path: 'prepareshipment', component: PrepareshipmentComponent},
  {path: 'accounting', component: AccountingComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'courier-sheet', component: CouriersheetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
