import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallstud',
  templateUrl: './viewallstud.component.html',
  styleUrls: ['./viewallstud.component.css']
})
export class ViewallstudComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewstudent().subscribe(
      (data)=>{
        this.studentsData=data
      }
    )
  }


  deletestudent=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deletestudent(data).subscribe(
      (response)=>{
        alert ("Deleted")
      }
    )
    this.fetchData()
  }
  studentsData:any=[]

  ngOnInit(): void {
  }

}
