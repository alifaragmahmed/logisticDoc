import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureComponent} from './components/feature/feature.component';
import {ContactComponent} from './components/contactus/contact.component';
import {DocComponent} from './components/doc/doc.component';


const routes: Routes = [
  {path: 'home', component: DocComponent},
  {path: 'features', component: FeatureComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
