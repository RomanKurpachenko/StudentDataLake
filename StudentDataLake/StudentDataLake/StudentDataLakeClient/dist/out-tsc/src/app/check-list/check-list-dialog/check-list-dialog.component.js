import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let CheckListDialogComponent = class CheckListDialogComponent {
    constructor(dialogRef, data, spinner, snackBar, checkListService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.spinner = spinner;
        this.snackBar = snackBar;
        this.checkListService = checkListService;
        this.surveyForm = new FormGroup({
            name: new FormControl(data.checkList.name, Validators.required),
            level: new FormControl(data.checkList.level, Validators.required),
        });
    }
    save() {
        this.spinner.show();
        if (this.data.isNewCheckList) {
            this.checkListService.create(this.data.checkList).subscribe(result => {
                this.afterOkResponse("Новый контрольный список был добавлен", "Отлично");
            }, error => {
                this.afterBadResponse("Что-то пошло не так", "Понятно");
            });
        }
        else {
            this.checkListService.update(this.data.checkList).subscribe(result => {
                this.afterOkResponse("Контрольный списо был обновлен", "Отлично");
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