import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';
let CheckListComponent = class CheckListComponent {
    constructor(spinner, checkListService, dialog, _snackBar) {
        this.spinner = spinner;
        this.checkListService = checkListService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.checkLists = null;
        this.dataDialogModel = this.getNewDataDialogModel();
        this.displayedColumns = [
            'id',
            'name',
            'level'
        ];
        this.dataSource = new MatTableDataSource(this.checkLists);
    }
    ngOnInit() {
        this.getCheckLists();
        this.startConnections();
    }
    getNewDataDialogModel() {
        let dataModel = {
            isNewCheckList: true,
            checkList: {
                id: 0,
                name: "",
                level: 0,
                checkPoints: []
            },
            isDataAddedOrUpdated: false
        };
        return dataModel;
    }
    getCheckLists() {
        this.spinner.show();
        this.checkListService.getCheckLists().subscribe(result => {
            if (result) {
                this.checkLists = result;
                this.dataSource = new MatTableDataSource(this.checkLists);
                this.spinner.hide();
            }
        }, error => {
            this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
            this.checkLists = [];
            this.spinner.hide();
        });
    }
    startConnections() {
        this.checkListService.startConnection();
        this.checkListService.hubConnection.on('NewCheckListMessage', (result) => {
            console.log(result);
            if (result) {
                this.checkLists.push(result);
                this.dataSource = new MatTableDataSource(this.checkLists);
            }
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    openCheckListDialog(isNewCheckList, checkList = null) {
        if (!isNewCheckList) {
            this.dataDialogModel.isNewCheckList = false;
            this.dataDialogModel.checkList = checkList;
            this.dataDialogModel.isDataAddedOrUpdated = false;
        }
        else {
            if (this.dataDialogModel.isDataAddedOrUpdated) {
                this.dataDialogModel = this.getNewDataDialogModel();
            }
        }
        const dialogRef = this.dialog.open(CheckListDialogComponent, {
            width: '300px',
            data: this.dataDialogModel
        });
    }
    openCreatingDialog() {
        this.openCheckListDialog(true);
    }
    openUpdatingDialog(checkList) {
        this.openCheckListDialog(false, checkList);
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            panelClass: "snack-height"
        });
    }
    deleteCheckList(id) {
        this.checkListService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалены", "Хорошо");
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
//# sourceMappingURL=check-lists.component.js.map