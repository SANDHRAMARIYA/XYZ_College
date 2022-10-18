import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstud',
  templateUrl: './viewallstud.component.html',
  styleUrls: ['./viewallstud.component.css']
})
export class ViewallstudComponent implements OnInit {

  constructor() { }

  studentsData:any=[
    {"name":"Liya","rollnum":"1","admnnum":"2221","collegename":"xyz college","department":"civil engineering","blood":"B+","dob":"20-05-2001","parentname":"Jimmy","pemail":"jimmy02@gmail.com","gname":"Jimmy Mathew","gaddress":"Thottupuram(h)"},
    {"name":"Anna","rollnum":"2","admnnum":"2222","collegename":"xyz college","department":"civil engineering","blood":"B+","dob":"22-09-2001","parentname":"Benny","pemail":"benny02@gmail.com","gname":"Benny Mathew","gaddress":"Thottumkal(h)"}
  ]

  ngOnInit(): void {
  }

}
