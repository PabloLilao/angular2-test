import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingBodyComponent } from './landing-body/landing-body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    LandingBodyComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
