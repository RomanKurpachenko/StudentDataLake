import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let CheckpointDialogComponent = class CheckpointDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
CheckpointDialogComponent = __decorate([
    Component({
        selector: 'app-checkpoint-dialog',
        templateUrl: './checkpoint-dialog.component.html',
        styleUrls: ['./checkpoint-dialog.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], CheckpointDialogComponent);
export { CheckpointDialogComponent };
//# sourceMappingURL=checkpoint-dialog.component.js.map