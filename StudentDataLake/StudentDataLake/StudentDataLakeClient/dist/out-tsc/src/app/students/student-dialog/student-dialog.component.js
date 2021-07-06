import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let StudentDialogComponent = class StudentDialogComponent {
    constructor(dialogRef, data, spinner, snackBar, studentService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.studentService = studentService;
        this.surveyForm = new FormGroup({
            email: new FormControl(data.student.email, [Validators.required, Validators.email]),
            firstName: new FormControl(data.student.firstName, Validators.required),
            firstNativeName: new FormControl(data.student.firstNativeName, Validators.required),
            lastName: new FormControl(data.student.lastName, Validators.required),
            lastNativeName: new FormControl(data.student.lastNativeName, Validators.required),
        });
    }
    save() {
        this.spinner.show();
        if (this.data.isNewStudent) {
            this.studentService.create(this.data.student).subscribe(result => {
                this.afterOkResponse("Новый студент был добавлен", "Отлично");
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
    afterOkResponse(message, action) {
        this.spinner.hide();
        this.data.isDataAddedOrUpdated = true;
        this.openSnackBar(message, action);
        this.dialogRef.close();
    }
    afterBadResponse(message, action) {
        this.spinner.hide();
        this.openSnackBar(message, action);
    }
    openSnackBar(message, action = null) {
        this.snackBar.open(message, action);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
StudentDialogComponent = __decorate([
    Component({
        selector: 'app-student-dialog',
        templateUrl: './student-dialog.component.html',
        styleUrls: ['./student-dialog.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], StudentDialogComponent);
export { StudentDialogComponent };
//# sourceMappingURL=student-dialog.component.js.map