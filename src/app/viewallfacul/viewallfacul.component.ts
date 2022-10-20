import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallfacul',
  templateUrl: './viewallfacul.component.html',
  styleUrls: ['./viewallfacul.component.css']
})
export class ViewallfaculComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }



  fetchData=()=>{
    this.myapi.viewfaculty().subscribe(
      (data)=>{
        this.facultyData=data
      }
    )
  }


  deletefaculty=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deletefaculty(data).subscribe(
      (respose)=>{
        alert ("Deleted")
      }
    )
    this.fetchData()
  }
  facultyData:any=[]
  


  ngOnInit(): void {
  }

}
