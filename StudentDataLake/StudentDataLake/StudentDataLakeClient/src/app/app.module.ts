import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckListComponent } from './check-list/check-list.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { StudentService } from './services/student.service';
import { CheckListService } from './services/check-list.service';

import { StudentDialogComponent } from './students/student-dialog/student-dialog.component';
import { CheckListDialogComponent } from './check-list/check-list-dialog/check-list-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    NavbarComponent,
    CheckListComponent,
    StudentDialogComponent,
    CheckListDialogComponent
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
    CheckListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
