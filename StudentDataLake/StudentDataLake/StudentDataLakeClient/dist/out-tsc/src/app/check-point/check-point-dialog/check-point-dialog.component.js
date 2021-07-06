import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let CheckPointDialogComponent = class CheckPointDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
CheckPointDialogComponent = __decorate([
    Component({
        selector: 'app-check-point-dialog',
        templateUrl: './check-point-dialog.component.html',
        styleUrls: ['./check-point-dialog.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], CheckPointDialogComponent);
export { CheckPointDialogComponent };
//# sourceMappingURL=check-point-dialog.component.js.map