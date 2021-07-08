import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { StudentDialogComponent } from './students/student-dialog/student-dialog.component';
import { CheckpointDialogComponent } from './checklist/checklist-details/checkpoints/checkpoint-dialog/checkpoint-dialog.component';
import { CheckpointDetailsComponent } from './checklist/checklist-details/checkpoints/checkpoint-details/checkpoint-details.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistDetailsComponent } from './checklist/checklist-details/checklist-details.component';
import { ChecklistDialogComponent } from './checklist/checklist-dialog/checklist-dialog.component';
import { CheckpointsComponent } from './checklist/checklist-details/checkpoints/checkpoints.component';
import { CheckListService } from './services/check-list.service';
import { CheckPointService } from './services/check-point.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentsComponent,
    StudentDialogComponent,
    ChecklistComponent,
    CheckpointDialogComponent,
    ChecklistDetailsComponent,
    ChecklistDialogComponent,
    CheckpointsComponent,
    CheckpointDetailsComponent
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
