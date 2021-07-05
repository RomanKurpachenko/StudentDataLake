import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentModel } from '../models/student-model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {

  surveyForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentModel,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private studentService: StudentService
  ) {
    this.surveyForm = new FormGroup({
      email: new FormControl(data.student.email, [Validators.required, Validators.email]),
      firstName: new FormControl(data.student.firstName, Validators.required),
      firstNativeName: new FormControl(data.student.firstNativeName, Validators.required),
      lastName: new FormControl(data.student.lastName, Validators.required),
      lastNativeName: new FormControl(data.student.lastNativeName, Validators.required),
    })
  }

  openSnackBar(message: string, action: string = null) {
    this.snackBar.open(message, action);
  }

  afterOkResponse(
    message: string,
    action: string
  ) {
    this.spinner.hide();
    this.data.isDataAddedOrUpdated = true;
    this.openSnackBar(message, action);
    this.dialogRef.close();
  }

  afterBadResponse(
    message: string,
    action: string
  ) {
    this.spinner.hide();
    this.openSnackBar(message, action)
  }

  save() {
    this.spinner.show();
    if (this.data.isNewStudent) {
      this.studentService.create(this.data.student).subscribe(result => {
        this.afterOkResponse("Новый студент был добавлен", "Отлично")
      }, error => {
        this.afterBadResponse("Что-то пошло не так", "Понятно");
      });
    }
    else {
      this.studentService.update(this.data.student).subscribe(result => {
        this.afterOkResponse("Cтудент был обновлен", "Отлично");
      }, error => {
        this.afterBadResponse("Что-то пошло не так", "Понятно");
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
