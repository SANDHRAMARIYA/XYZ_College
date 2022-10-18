import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfacul',
  templateUrl: './addfacul.component.html',
  styleUrls: ['./addfacul.component.css']
})
export class AddfaculComponent implements OnInit {

  constructor() { }

  name=""
  department=""
  designation=""
  dob=""
  education=""
  address=""
  mobile=""
  doj=""

status:boolean=false

  readValue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.dob,
      "education":this.education,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
    this.name=""
    this.department=""
    this.dob=""
    this.education=""
    this.address=""
    this.mobile=""
    this.doj=""
    this.status=true
  }



  ngOnInit(): void {
  }

}
