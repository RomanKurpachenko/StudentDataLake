import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(
    private spinner: NgxSpinnerService,
    private studentService: StudentService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.studentService.getStudents().subscribe(result => {
      if (result) {
        this.students = result;
        this.spinner.hide();
      }
    }, error => {
      console.log("Нет данных, потому что ошибка");
      this.students = [];
      this.spinner.hide();
    });
  }

  getNewStudent(): Student {
    return {
      id: 0,
      email: "",
      firstName: "",
      firstNativeName:"",
      lastName: "",
      lastNativeName: ""
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '300px',
      data: this.getNewStudent()
    });

    dialogRef.afterClosed().subscribe(data => {
      this.studentService.createStudent(data).subscribe(result => {
        this.students.push(data);
      })
    });
  }
}
