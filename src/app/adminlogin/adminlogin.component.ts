import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter:Router) { }


  username=""
  password=""
  
  readValues=()=>{
    let data={
      "name":this.username,
      "password":this.password
    }
    if (this.username=="admin" && this.password=="admin")
    {
      this.myrouter.navigate(["/home"])
    }
    else
    {
  alert("invalid login")
    }
    console.log(data)
  }
  


  ngOnInit(): void {
  }

}
