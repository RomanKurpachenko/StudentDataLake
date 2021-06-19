import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
let StudentsComponent = class StudentsComponent {
    constructor(spinner, studentService, dialog, _snackBar) {
        this.spinner = spinner;
        this.studentService = studentService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.getStudents();
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
    openDialog(isNewStudent, student = null) {
        const dialogRef = this.dialog.open(StudentDialogComponent, {
            width: '300px',
            data: this.getDataForDialog(isNewStudent, student)
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.isNewStudent) {
                this.studentService.create(data.student).subscribe(result => {
                    this.openSnackBar("Новый студент был добавлен", "Отлично");
                    this.getStudents();
                });
            }
            else {
                this.studentService.update(data.student).subscribe(result => {
                    this.openSnackBar("Данные были успешно обновлены", "Круть");
                });
            }
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            panelClass: "snack-height"
        });
    }
    getDataForDialog(isNewStudent, student = null) {
        if (isNewStudent) {
            return {
                student: this.getNewStudent(),
                isNewStudent: isNewStudent
            };
        }
        else {
            return {
                student: student,
                isNewStudent: isNewStudent
            };
        }
    }
    getNewStudent() {
        return {
            id: 0,
            email: "",
            firstName: "",
            firstNativeName: "",
            lastName: "",
            lastNativeName: ""
        };
    }
    deleteStudent(id) {
        this.studentService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалены", "Хорошо");
            this.students = this.students.filter(student => student.id != id);
        });
    }
};
StudentsComponent = __decorate([
    Component({
        selector: 'app-students',
        templateUrl: './students.component.html',
        styleUrls: ['./students.component.scss']
    })
], StudentsComponent);
export { StudentsComponent };
//# sourceMappingURL=students.component.js.map