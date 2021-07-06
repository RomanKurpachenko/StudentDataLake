import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CheckPointDialogComponent } from './check-point-dialog/check-point-dialog.component';
let CheckPointComponent = class CheckPointComponent {
    constructor(spinner, checkPointService, dialog, _snackBar) {
        this.spinner = spinner;
        this.checkPointService = checkPointService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.getCheckPoints();
    }
    getCheckPoints() {
        this.spinner.show();
        this.checkPointService.getCheckPoints().subscribe(result => {
            if (result) {
                this.checkPoints = result;
                this.spinner.hide();
            }
        }, error => {
            this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
            this.checkPoints = [];
            this.spinner.hide();
        });
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
                isNewCheckPoint: isNewCheckPoint
            };
        }
        else {
            return {
                checkPoint: checkPoint,
                isNewCheckPoint: isNewCheckPoint
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
CheckPointComponent = __decorate([
    Component({
        selector: 'app-check-point',
        templateUrl: './check-point.component.html',
        styleUrls: ['./check-point.component.scss']
    })
], CheckPointComponent);
export { CheckPointComponent };
//# sourceMappingURL=check-point.component.js.map