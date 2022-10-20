import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewstudent=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addstudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studentEntry",data)
  }

  deletestudent=(data:any)=>{
    return this.http.post("http://localhost:8080/deletestudent",data)
  }

  searchstudent=(data:any)=>{
    return this.http.post("http://localhost:8080/searchstudent",data)
  }

  addfaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/addfaculty",data)
  }

  viewfaculty=()=>{
    return this.http.get("http://localhost:8080/viewfaculty")
  }
  deletefaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/deletefaculty",data)
  }
  searchfaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/searchfaculty",data)
  }
}
