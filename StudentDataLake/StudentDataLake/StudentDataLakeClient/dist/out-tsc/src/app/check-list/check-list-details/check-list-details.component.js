import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CheckListDetailsComponent = class CheckListDetailsComponent {
    constructor(checkPointService, dialog, _snackBar, activatedRoute, checkListService) {
        this.checkPointService = checkPointService;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.activatedRoute = activatedRoute;
        this.checkListService = checkListService;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.checkListService.getCheckList(this.id).subscribe(result => {
            if (result) {
                this.checkList = result;
            }
        });
    }
    getNewDataDialogModel() {
        let dataModel = {
            isNewCheckPoint: true,
            checkPoint: {
                id: 0,
                checkListId: this.id,
                name: ""
            },
            isDataAddedOrUpdated: false
        };
        return dataModel;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            panelClass: "snack-height"
        });
    }
    deleteCheckPoint(id) {
        this.checkPointService.delete(id).subscribe(result => {
            this.openSnackBar("Данные были успешно удалены", "Хорошо");
            this.checkList.checkPoints = this.checkList.checkPoints.filter(checkPoint => checkPoint.id != id);
        });
    }
};
CheckListDetailsComponent = __decorate([
    Component({
        selector: 'app-check-list-details',
        templateUrl: './check-list-details.component.html',
        styleUrls: ['./check-list-details.component.scss']
    })
], CheckListDetailsComponent);
export { CheckListDetailsComponent };
//# sourceMappingURL=check-list-details.component.js.map