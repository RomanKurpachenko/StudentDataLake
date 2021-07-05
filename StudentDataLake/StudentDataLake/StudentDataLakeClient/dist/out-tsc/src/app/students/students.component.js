import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
let StudentsComponent = class StudentsComponent {
    constructor(spinner, studentService, dialog, _snackBar) {
        this.spinner = spinner;
        this.studentService = studentService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.students = null;
        this.dataDialogModel = this.getNewDataDialogModel();
        this.displayedColumns = [
            'id',
            'email',
            'firstName',
            'firstNativeName',
            'lastName',
            'lastNativeName'
        ];
        this.dataSource = new MatTableDataSource(this.students);
    }
    ngOnInit() {
        this.getStudents();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    getNewDataDialogModel() {
        let dataModel = {
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
        };
        return dataModel;
    }
    getStudents() {
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
    openStudentDialog(isNewStudent, student = null) {
        if (!isNewStudent) {
            this.dataDialogModel.isNewStudent = false;
            this.dataDialogModel.student = student;
            this.dataDialogModel.isDataAddedOrUpdated = false;
        }
        else {
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
    openUpdatingDialog(student) {
        this.openStudentDialog(false, student);
    }
    deleteStudent(id) {
        this.studentService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалены", "Хорошо");
            this.students = this.students.filter(student => student.id != id);
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            panelClass: "snack-height"
        });
    }
};
__decorate([
    ViewChild(MatSort)
], StudentsComponent.prototype, "sort", void 0);
StudentsComponent = __decorate([
    Component({
        selector: 'app-students',
        templateUrl: './students.component.html',
        styleUrls: ['./students.component.scss']
    })
], StudentsComponent);
export { StudentsComponent };
//# sourceMappingURL=students.component.js.map