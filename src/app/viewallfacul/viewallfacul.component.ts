import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfacul',
  templateUrl: './viewallfacul.component.html',
  styleUrls: ['./viewallfacul.component.css']
})
export class ViewallfaculComponent implements OnInit {

  constructor() { }

  facultyData:any=[
    {"name":"Jaison","department":"mechanical engineering","designation":"assistant professor","dob":"1985-11-01","education":"Mtech","address":"abc","mobile":"9875463218","doj":"2022-10-01"},
    {"name":"Mathew","department":"Computer Science","designation":"assistant professor","dob":"1988-12-21","education":"Mca","address":"xyz","mobile":"9875883218","doj":"2018-06-08"}
    
  
  ]


  ngOnInit(): void {
  }

}
