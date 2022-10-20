import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddstudComponent } from './addstud/addstud.component';
import { ViewallstudComponent } from './viewallstud/viewallstud.component';
import { AddfaculComponent } from './addfacul/addfacul.component';
import { ViewallfaculComponent } from './viewallfacul/viewallfacul.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchstudComponent } from './searchstud/searchstud.component';
import { SearchfaculComponent } from './searchfacul/searchfacul.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"addstudent",component:AddstudComponent
  },
  {
    path:"viewstudent",component:ViewallstudComponent
  },
  {
    path:"addfaculty",component:AddfaculComponent
  },
  {
    path:"viewfaculty",component:ViewallfaculComponent
  },
  {
    path:"searchstud",component:SearchstudComponent
  },
  {
    path:"searchfacul",component:SearchfaculComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    NavbarComponent,
    HomeComponent,
    AddstudComponent,
    ViewallstudComponent,
    AddfaculComponent,
    ViewallfaculComponent,
    SearchstudComponent,
    SearchfaculComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
