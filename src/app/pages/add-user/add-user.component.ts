import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/city.json').subscribe(res=>{
      debugger;
    })
  }

}

export interface City {
  cityId: number;
  cityName: string;
  districtId: number
}
export interface District {
  districtId: number;
  districtName: string;
  stateId: number;
}
export interface District {
  stateId: number;
  state: number;
}
