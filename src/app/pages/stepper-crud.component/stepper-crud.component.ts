import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-crud',
  templateUrl: './stepper-crud.component.html',
  styleUrls: ['./stepper-crud.component.css']
})
export class StepperCrudComponent implements OnInit {
  client_step = false;
  project_step = false;
  rfp_step = false;
  step = 1;
  businessOwners: any[]= [];
  projectObj: any = {
    id: 0,
    name: '',
    industry: '',
    bName: '',
    lName: '',
    bEmail: '',
    pNAme: '',
    duration: '',
    pCode: '', 
    managerName: '',
    sucrumMaster: '',
    frontEnd: '',
    backEnd: '',
    testingFramework:'',
    hostingPlatform: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  previous() {
    this.step--;
    if (this.step == 1) {
      this.client_step = false;
    }
    if (this.step == 2) {
      this.rfp_step = false;
    }
  }

  next() {
    this.step++;
  }

  submit() { 
    const data = this.projectObj;
    debugger;
  }

  onCancel() {
    this.projectObj = {
      id: 0,
      name: '',
      industry: '',
      bName: '',
      lName: '',
      bEmail: '',
      pNAme: '',
      duration: '',
      pCode: '',
      partnerName: '',
      managerName: '',
      sucrumMaster: '',
      frontEnd: '',
      backEnd: '',
      testingFramework:'',
      hostingPlatform: ''
    }
  }

}
