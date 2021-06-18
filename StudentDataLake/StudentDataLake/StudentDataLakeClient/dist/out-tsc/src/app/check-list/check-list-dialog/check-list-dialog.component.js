import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let CheckListDialogComponent = class CheckListDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
CheckListDialogComponent = __decorate([
    Component({
        selector: 'app-check-list-dialog',
        templateUrl: './check-list-dialog.component.html',
        styleUrls: ['./check-list-dialog.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], CheckListDialogComponent);
export { CheckListDialogComponent };
//# sourceMappingURL=check-list-dialog.component.js.map