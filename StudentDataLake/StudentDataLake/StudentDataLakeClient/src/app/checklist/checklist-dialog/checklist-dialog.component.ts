import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckListService } from 'src/app/services/check-list.service';
import { CheckListModel } from '../models/checklist.model';

@Component({
  selector: 'app-checklist-dialog',
  templateUrl: './checklist-dialog.component.html',
  styleUrls: ['./checklist-dialog.component.scss']
})
export class ChecklistDialogComponent{

  surveyForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ChecklistDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CheckListModel,
        private spinner: NgxSpinnerService,
        private snackBar: MatSnackBar,
        private checkListService: CheckListService
        ) {
            this.surveyForm = new FormGroup({
                name: new FormControl(data.checkList.name, Validators.required),
                level: new FormControl(data.checkList.level, Validators.required),
            })
        }

        save() {
            this.spinner.show();
            if(this.data.isNewCheckList) {
                this.checkListService.create(this.data.checkList).subscribe(result => {
                    this.afterOkResponse("Новый контрольный список был добавлен", "Отлично")
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

        afterOkResponse(
            message: string,
            action: string
        ) {
            this.spinner.hide();
            this.data.isDataAddedOrUpdated = true;
            this.openSnackBar(message, action);
            this.dialogRef.close();
        }

        afterBadResponse(
            message: string,
            action: string
        ) {
            this.spinner.hide();
            this.openSnackBar(message, action)
        }

        openSnackBar(message: string, action: string = null) {
            this.snackBar.open(message, action);
        }
    
    onNoClick(): void {
        this.dialogRef.close();
    }

}