import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {

  constructor() { }

  name=""
  rollnum=""
  admnnum=""
  collegename=""
  department=""
  blood=""
  dob=""
  parentname=""
  pemail=""
  gname=""
  gaddress=""

status:boolean=false

  readValues=()=>{
    let data={
      "name":this.name,
      "rollnum":this.rollnum,
      "admnnum":this.admnnum,
      "collegename":this.collegename,
      "department":this.department,
      "blood":this.blood,
      "dob":this.dob,
      "parentname":this.parentname,
      "pemail":this.pemail,
      "gname":this.gname,
      "gaddress":this.gaddress
    }
    console.log(data)
   this.name=""
   this.rollnum=""
   this.admnnum=""
   this.collegename=""
   this.department=""
   this.blood=""
   this.dob=""
   this.parentname=""
   this.pemail=""
   this.gname=""
   this.gaddress=""
   this.status=true 
  }


  ngOnInit(): void {
  }

}
