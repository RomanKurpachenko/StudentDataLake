import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckPoint } from 'src/app/models/check-point';
import { CheckPointModel } from '../models/check-point-model';

@Component({
    selector: 'app-check-point-dialog',
    templateUrl: './check-point-dialog.component.html',
    styleUrls: ['./check-point-dialog.component.scss']
})

export class CheckPointDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<CheckPointDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CheckPointModel) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }
}