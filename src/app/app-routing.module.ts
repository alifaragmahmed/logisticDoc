import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureComponent} from './components/feature/feature.component';
import {ContactComponent} from './components/contactus/contact.component';
import {DocComponent} from './components/doc/doc.component';
import { HomeComponent } from './components/home/home.component';
import {PrepareshipmentComponent} from './components/prepareshipment/prepareshipment.component';
import {SideBarMenuComponent} from './components/layout/sidebarmenu/sidebarmenu.component';
import {AccountingComponent} from './components/accounting/accounting.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeatureComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doc', component: SideBarMenuComponent},
  {path: 'prepareshipment', component: DocComponent},
  {path: 'accounting', component: AccountingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
