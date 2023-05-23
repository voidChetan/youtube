import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList: any [] = [];
  empObj: any  ={
    empId:0,
    empName: '',
    empContactNo:'',
    empEmailId:'',
    empState: ''
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadEmp();
  }

  loadEmp() {
    this.http.get("http://localhost:61334/api/Employee/GetAllEmployee").subscribe((res: any)=>{
    this.empList = res;
    })  
  }
  onSave() {
    this.http.post("http://localhost:61334/api/Employee/AddEmp", this.empObj).subscribe((res: any)=>{
      this.loadEmp();
    })  
  }
  onUpdate() {
    this.http.put("http://localhost:61334/api/Employee/updateEmpl", this.empObj).subscribe((res: any)=>{
      this.loadEmp();
    })  
  }
  onEdit(emp: any) {
    this.empObj = emp;
  }
  ondelete(id: number) {
    this.http.delete("http://localhost:61334/api/Employee/deleteEmpById?id="+ id).subscribe((res: any)=>{
      this.loadEmp();
    })  
  }

}
