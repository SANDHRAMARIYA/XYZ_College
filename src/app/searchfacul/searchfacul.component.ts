import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchfacul',
  templateUrl: './searchfacul.component.html',
  styleUrls: ['./searchfacul.component.css']
})
export class SearchfaculComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
 

  readValues=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchfaculty(data).subscribe(
      (resp)=>{
        this.data=resp
        this.name=""
      }
    )
    
  }

data:any=[]
  ngOnInit(): void {
  }
}

