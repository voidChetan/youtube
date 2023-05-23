import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { QuizAppComponent } from './pages/quiz-app/quiz-app.component';
import { StepperCrudComponent } from './pages/stepper-crud.component/stepper-crud.component';

const routes: Routes = [
  {
    path: 'quizApp',
    component: QuizAppComponent
  },
  {
    path: 'newEmp',
    component: EmployeeComponent
  },
  {
    path: 'stepperCrud',
    component: StepperCrudComponent
  },
  {
    path: 'Courses',
    component: RolesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: RolesComponent
  },
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin-dash',
        component: AdminDashboardComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      }
    ]
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'addUser',
        component: AddUserComponent
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'way2addUser',
        component: AddUserComponent
      },
      {
        path: 'way2user-dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'way2user-list',
        component: UserListComponent
      },
      {
        path: 'way2admin-dash',
        component: AdminDashboardComponent
      },
      {
        path: 'way2employee',
        component: EmployeeComponent
      },
      {
        path: 'way2roles',
        component: RolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
