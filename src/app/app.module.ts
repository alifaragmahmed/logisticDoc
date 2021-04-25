import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {FeatureComponent} from './components/feature/feature.component';
import {ContactComponent} from './components/contactus/contact.component';
import {SideBarMenuComponent} from './components/layout/sidebarmenu/sidebarmenu.component';
import {DocComponent} from './components/doc/doc.component';
import {AccountingComponent} from './components/accounting/accounting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeatureComponent,
    ContactComponent,
    SideBarMenuComponent,
    DocComponent,
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
