import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { StudentsComponent } from './students/students.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckPointComponent } from './check-point/check-point.component';

import { StudentService } from './services/student.service';
import { CheckListService } from './services/check-list.service';
import { CheckPointService } from './services/check-point.service';

import { StudentDialogComponent } from './students/student-dialog/student-dialog.component';
import { CheckListDialogComponent } from './check-list/check-list-dialog/check-list-dialog.component';
import { CheckPointDialogComponent } from './check-point/check-point-dialog/check-point-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentsComponent,
    CheckListComponent,
    CheckPointComponent,
    StudentDialogComponent,
    CheckListDialogComponent,
    CheckPointDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    StudentService,
    CheckListService,
    CheckPointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
