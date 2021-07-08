import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckpointModel } from '../models/checkpoint-model';

@Component({
  selector: 'app-checkpoint-dialog',
  templateUrl: './checkpoint-dialog.component.html',
  styleUrls: ['./checkpoint-dialog.component.scss']
})
export class CheckpointDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<CheckpointDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CheckpointModel) {}

onNoClick(): void {
    this.dialogRef.close();
}

}
