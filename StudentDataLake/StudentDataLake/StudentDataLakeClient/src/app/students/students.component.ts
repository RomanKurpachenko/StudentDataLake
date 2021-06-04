import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(
    private spinner: NgxSpinnerService,
    private studentService: StudentService
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
}
