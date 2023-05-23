import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RolesComponent } from './pages/roles/roles.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { VoidTableComponent } from './reusable/void-table/void-table.component';
import { TabsComponent } from './reusable/tabs/tabs.component';
import { QuizAppComponent } from './pages/quiz-app/quiz-app.component';
import { StepperCrudComponent } from './pages/stepper-crud.component/stepper-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    RolesComponent,
    EmployeeComponent,
    LoginComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    HomeLayoutComponent,
    VoidTableComponent,
    TabsComponent,
    QuizAppComponent,
    StepperCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
