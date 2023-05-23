import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    Result: false,
    Message:''
  };
  registerObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    CreatedDate: new Date()
  };
  isRegister: boolean = false;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onRegister() {
    this.http.post("http://localhost:61334/api/Registration/Register", this.registerObj).subscribe(res=>{

    })
  }
  onLogin(){
    debugger;
    this.http.post("http://localhost:61334/api/Registration/Login", this.loginObj).subscribe((response: any)=>{
      debugger;
      if(response.result) {
        alert(response.message)
        this.router.navigateByUrl('way2user-dashboard');
      } else {
        alert(response.message)
      }
    })
    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
  }

}
