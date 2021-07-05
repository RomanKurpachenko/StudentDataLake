import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  students: Student[] = null;

  dataDialogModel: StudentModel = this.getNewDataDialogModel();

  displayedColumns: string[] = [
    'id',
    'email',
    'firstName',
    'firstNativeName',
    'lastName',
    'lastNativeName'
  ];

  dataSource = new MatTableDataSource(this.students);

  constructor(
    private spinner: NgxSpinnerService,
    private studentService: StudentService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.getStudents();

    this.startConnections();
  }

  getNewDataDialogModel(
  ): StudentModel {

    let dataModel: StudentModel = {
      isNewStudent: true,
      student: {
        id: 0,
        email: "",
        firstName: "",
        firstNativeName: "",
        lastName: "",
        lastNativeName: ""
      },
      isDataAddedOrUpdated: false
    }

    return dataModel;
  }

  getStudents() {
    this.spinner.show();
    this.studentService.getStudents().subscribe(result => {
      if (result) {
        this.students = result;
        this.dataSource = new MatTableDataSource(this.students);
        this.spinner.hide();
      }
    }, error => {
      this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
      this.students = [];
      this.spinner.hide();
    });
  }

  startConnections() {

    this.studentService.startConnection();

    this.studentService.hubConnection.on('NewStudentMessage', (result: Student) => {
      if (result) {
        this.students.push(result);
        this.dataSource = new MatTableDataSource(this.students);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openStudentDialog(
    isNewStudent: boolean,
    student: Student = null
  ): void {

    if (!isNewStudent) {
      this.dataDialogModel.isNewStudent = false;
      this.dataDialogModel.student = student;
      this.dataDialogModel.isDataAddedOrUpdated = false;
    } else {
      if (this.dataDialogModel.isDataAddedOrUpdated) {
        this.dataDialogModel = this.getNewDataDialogModel();
      }
    }

    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '300px',
      data: this.dataDialogModel
    });
  }

  openCreatingDialog() {
    this.openStudentDialog(true);
  }

  openUpdatingDialog(student: Student) {
    this.openStudentDialog(false, student);
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалены", "Хорошо");
      this.students = this.students.filter(student => student.id != id);
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
    });
  }
}
