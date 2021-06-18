import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';
let CheckListComponent = class CheckListComponent {
    constructor(spinner, checkListService, dialog) {
        this.spinner = spinner;
        this.checkListService = checkListService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.spinner.show();
        this.checkListService.getCheckList().subscribe(result => {
            if (result) {
                this.checkLists = result;
                this.spinner.hide();
            }
        }, error => {
            console.log("Нет данных по check-list");
            this.checkLists = [];
            this.spinner.hide();
        });
    }
    getNewCheckList() {
        return {
            id: 0,
            name: "0checkList",
            level: 0
        };
    }
    openDialog() {
        const dialogRef = this.dialog.open(CheckListDialogComponent, {
            width: '300px',
            data: this.getNewCheckList()
        });
        dialogRef.afterClosed().subscribe(data => {
            this.checkListService.createCheckList(data).subscribe(result => {
                this.checkLists.push(data);
            });
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