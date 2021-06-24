import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckList } from 'src/app/models/check-list';
import { CheckListModel } from '../models/check-list-model';

@Component({
    selector: 'app-check-list-dialog',
    templateUrl: './check-list-dialog.component.html',
    styleUrls: ['./check-list-dialog.component.scss']
})

export class CheckListDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<CheckListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CheckListModel) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }
}