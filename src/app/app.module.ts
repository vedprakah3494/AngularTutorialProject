import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskModule } from './Task/task.module';
import { EmployeeModule } from './employee/employee.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
