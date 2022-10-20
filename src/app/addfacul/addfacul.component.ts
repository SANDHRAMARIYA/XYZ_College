import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfacul',
  templateUrl: './addfacul.component.html',
  styleUrls: ['./addfacul.component.css']
})
export class AddfaculComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  department=""
  
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
     
      "dob":this.dob,
      "education":this.education,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
    this.myapi.addfaculty(data).subscribe(
      (response)=>{
        console.log(response)
        alert ("successfully added")
        this.name=""
        this.department=""
       
        this.dob=""
        this.education=""
        this.address=""
        this.mobile=""
        this.doj=""
        this.status=true
   
  }
    )
  }

  ngOnInit(): void {
  }

}
