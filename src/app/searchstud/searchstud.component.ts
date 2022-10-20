import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstud',
  templateUrl: './searchstud.component.html',
  styleUrls: ['./searchstud.component.css']
})
export class SearchstudComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  inputvalue=""


  readValues=()=>{
    let data={
      "name":this.inputvalue,
      "admnnum":this.inputvalue
    }
    console.log(data)
    this.myapi.searchstudent(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]
  ngOnInit(): void {
  }

}
