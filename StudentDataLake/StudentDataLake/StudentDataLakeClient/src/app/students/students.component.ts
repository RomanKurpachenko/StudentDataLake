import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { StudentModel } from './models/student-model';
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
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.spinner.show();
    this.studentService.getStudents().subscribe(result => {
      if (result) {
        this.students = result;
        this.spinner.hide();
      }
    }, error => {
      this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
      this.students = [];
      this.spinner.hide();
    });
  }

  openDialog(isNewStudent: boolean, student: Student = null): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '300px',
      data: this.getDataForDialog(isNewStudent, student)
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.isNewStudent){
        this.studentService.create(data.student).subscribe(result => {
          this.openSnackBar("Новый студент был добавлен", "Отлично");
          this.getStudents();
        });
      } else{
        this.studentService.update(data.student).subscribe(result => {
          this.openSnackBar("Данные были успешно обновлены", "Круть");
        });
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
  });
  }

  getDataForDialog(isNewStudent: boolean, student: Student = null): StudentModel{
    if(isNewStudent){
      return {
        student: this.getNewStudent(),
        isNewStudent: isNewStudent
      }
    } else{
      return {
        student: student,
        isNewStudent: isNewStudent
      }
    }
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

  deleteStudent(id: number){
    this.studentService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалены", "Хорошо");
      this.students = this.students.filter(student => student.id != id);
    })
  }
}
