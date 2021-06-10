import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let StudentDialogComponent = class StudentDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
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