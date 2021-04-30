import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureComponent} from './components/feature/feature.component';
import {ContactComponent} from './components/contactus/contact.component';
import { HomeComponent } from './components/home/home.component';
import {SideBarMenuComponent} from './components/layout/sidebarmenu/sidebarmenu.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeatureComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doc', component: SideBarMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
