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
    ViewallfaculComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
