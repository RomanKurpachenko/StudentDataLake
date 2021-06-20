import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';
let CheckListComponent = class CheckListComponent {
    constructor(spinner, checkListService, dialog, _snackBar) {
        this.spinner = spinner;
        this.checkListService = checkListService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.getCheckLists();
    }
    getCheckLists() {
        this.spinner.show();
        this.checkListService.getCheckLists().subscribe(result => {
            if (result) {
                this.checkLists = result;
                this.spinner.hide();
            }
        }, error => {
            this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
            this.checkLists = [];
            this.spinner.hide();
        });
    }
    openDialog(isNewCheckList, checkList = null) {
        const dialogRef = this.dialog.open(CheckListDialogComponent, {
            width: '300px',
            data: this.getDataForDialog(isNewCheckList, checkList)
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.isNewCheckList) {
                this.checkListService.create(data.checkList).subscribe(result => {
                    this.openSnackBar("Новый контрольный список студента был добавлен", "Отлично");
                    this.getCheckLists();
                });
            }
            else {
                this.checkListService.update(data.checkList).subscribe(result => {
                    this.openSnackBar("Данные были успешно обновлены", "Отлично");
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
    getDataForDialog(isNewCheckList, checkList = null) {
        if (isNewCheckList) {
            return {
                checkList: this.getNewCheckList(),
                isNewCheckList: isNewCheckList
            };
        }
        else {
            return {
                checkList: checkList,
                isNewCheckList: isNewCheckList
            };
        }
    }
    getNewCheckList() {
        return {
            id: 0,
            name: "TestCheckList",
            level: 0
        };
    }
    deleteCheckList(id) {
        this.checkListService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалено", "Хорошо");
            this.checkLists = this.checkLists.filter(checkList => checkList.id != id);
        });
    }
};
CheckListComponent = __decorate([
    Component({
        selector: 'app-check-list',
        templateUrl: './check-list.component.html',
        styleUrls: ['./check-list.component.scss']
    })
], CheckListComponent);
export { CheckListComponent };
//# sourceMappingURL=check-list.component.js.map