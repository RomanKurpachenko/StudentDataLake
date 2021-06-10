import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
let StudentsComponent = class StudentsComponent {
    constructor(spinner, studentService, dialog) {
        this.spinner = spinner;
        this.studentService = studentService;
        this.dialog = dialog;
    }
    ngOnInit() {
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
    openDialog() {
        const dialogRef = this.dialog.open(StudentDialogComponent, {
            width: '250px',
            data: this.getNewStudent()
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
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