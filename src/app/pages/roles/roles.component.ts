import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  courseObj: any ={
    courseId: 0,
    courseName: '',
    courseDuration: '',
    courseBasicFees: 0,
    isEdit: true
  };
  oldObj: any;
  courseArr: any[] = [];
  addCourse: boolean = false;
  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.loadCourse();
  }

  onAdd(){
    const editCount =   this.courseArr.filter(m=>m.isEdit == true);
    if(editCount.length == 0) {
      this.courseArr.unshift(this.courseObj);
    }
   
  }

  onClose(){
    this.addCourse = false;
    this.onReset();
  }

  loadCourse(){
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList').subscribe((res:any)=>{
      this.courseArr = res.data;
    })
  }

  onSave(item: any){
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse', item).subscribe((res:any)=>{
      this.loadCourse();
      this.onReset();
    })
  }

  onEdit(item:any){ 
    this.courseArr.forEach((element:any) => {
      element.isEdit = false;
    })
    this.oldObj = JSON.stringify(item);
    item.isEdit = true;
  }

  onUpdate(item: any){
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCourse', item).subscribe((res:any)=>{
      this.loadCourse();
      this.onReset();
    })
  }

  onDelete(item:any){
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCourse',item).subscribe((res:any)=>{
      this.loadCourse();
    })
  }

  onReset(){
    
  }

  onCancel(item:any){
    if(item.courseId ==0) {
      this.courseArr.splice(0,1)
    } else {
      item.isEdit = false;
      const old = JSON.parse(this.oldObj);
      item.courseName = old.courseName; 
      item.courseDuration = old.courseDuration;
      item.courseBasicFees = old.courseBasicFees;
    } 
  }

}


