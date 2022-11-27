import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  routesArray : any [] = [
      {
        path:'way2addUser',
        text:'Add User',
        role: 'user'
      },
      {
        path:'way2user-dashboard',
        text:'User Dashboard',
        role: 'user'
      },
      {
        path:'way2user-list',
        text:'User List',
        role: 'user'
      },
      {
        path:'way2admin-dash',
        text:'Admin Dashboard',
        role: 'admin'
      },
      {
        path:'way2employee',
        text:'Employee',
        role: 'admin'
      },
      {
        path:'way2roles',
        text:'Roles',
        role: 'admin'
      }
  ];
    userRoutes: any [] = [];

  constructor() {
    const role = localStorage.getItem('role');
    this.userRoutes = this.routesArray.filter((route: any)=> route.role == role);
  }

  ngOnInit(): void {
  }

}
