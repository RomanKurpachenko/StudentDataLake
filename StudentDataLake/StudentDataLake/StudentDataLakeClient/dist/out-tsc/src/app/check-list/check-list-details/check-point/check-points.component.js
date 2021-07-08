import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { CheckPointDialogComponent } from './check-point-dialog/check-point-dialog.component';
let CheckPointComponent = class CheckPointComponent {
    constructor(spinner, checkPointService, dialog, _snackBar) {
        this.spinner = spinner;
        this.checkPointService = checkPointService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.checkPoints = null;
    }
    ngOnInit() {
        this.getCheckPoints();
    }
    getCheckPoints() {
        this.spinner.show();
    }
    openDialog(isNewCheckPoint, checkPoint = null) {
        const dialogRef = this.dialog.open(CheckPointDialogComponent, {
            width: '300px',
            data: this.getDataForDialog(isNewCheckPoint, checkPoint)
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data.isNewCheckPoint) {
                this.checkPointService.create(data.checkPoint).subscribe(result => {
                    this.openSnackBar("Новый контрольный список студента был добавлен", "Отлично");
                    this.getCheckPoints();
                });
            }
            else {
                this.checkPointService.update(data.checkPoint).subscribe(result => {
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
    getDataForDialog(isNewCheckPoint, checkPoint = null) {
        if (isNewCheckPoint) {
            return {
                checkPoint: this.getNewCheckPoint(),
                isNewCheckPoint: isNewCheckPoint,
                isDataAddedOrUpdated: false
            };
        }
        else {
            return {
                checkPoint: checkPoint,
                isNewCheckPoint: isNewCheckPoint,
                isDataAddedOrUpdated: false
            };
        }
    }
    deleteCheckPoint(id) {
        this.checkPointService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалено", "Хорошо");
            this.checkPoints = this.checkPoints.filter(checkList => checkList.id != id);
        });
    }
    getNewCheckPoint() {
        return {
            id: 0,
            checkListId: 0,
            name: ""
        };
    }
};
__decorate([
    Input()
], CheckPointComponent.prototype, "checkPoints", void 0);
CheckPointComponent = __decorate([
    Component({
        selector: 'app-check-point',
        templateUrl: './check-points.component.html',
        styleUrls: ['./check-points.component.scss']
    })
], CheckPointComponent);
export { CheckPointComponent };
//# sourceMappingURL=check-points.component.js.map