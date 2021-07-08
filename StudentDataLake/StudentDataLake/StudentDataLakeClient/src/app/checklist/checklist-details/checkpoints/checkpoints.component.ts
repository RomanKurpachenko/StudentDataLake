import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Checkpoint } from 'src/app/models/check-point';
import { CheckPointService } from 'src/app/services/check-point.service';
import { CheckpointDialogComponent } from './checkpoint-dialog/checkpoint-dialog.component';
import { CheckpointModel } from './models/checkpoint-model';

@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.scss']
})
export class CheckpointsComponent implements OnInit {

  @Input() checkPoints: Checkpoint[] = null;

  constructor(
    private spinner: NgxSpinnerService,
    private checkPointService: CheckPointService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCheckPoints();
  }

  getCheckPoints() {
    this.spinner.show();
  }

  openDialog(isNewCheckPoint: boolean, checkPoint: Checkpoint = null): void {
    const dialogRef = this.dialog.open(CheckpointDialogComponent, {
      width: '300px',
      data: this.getDataForDialog(isNewCheckPoint, checkPoint)
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.isNewCheckPoint) {
        this.checkPointService.create(data.checkPoint).subscribe(result => {
          this.openSnackBar("Новый контрольный список студента был добавлен", "Отлично");
          this.getCheckPoints();
        });
      } else {
        this.checkPointService.update(data.checkPoint).subscribe(result => {
          this.openSnackBar("Данные были успешно обновлены", "Отлично");
        });
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
    });
  }

  getDataForDialog(isNewCheckPoint: boolean, checkPoint: Checkpoint = null): CheckpointModel {
    if (isNewCheckPoint) {
      return {
        checkPoint: this.getNewCheckPoint(),
        isNewCheckPoint: isNewCheckPoint,
        isDataAddedOrUpdated: false
      }
    } else {
      return {
        checkPoint: checkPoint,
        isNewCheckPoint: isNewCheckPoint,
        isDataAddedOrUpdated: false
      }
    }
  }

  deleteCheckPoint(id: number) {
    this.checkPointService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалено", "Хорошо");
      this.checkPoints = this.checkPoints.filter(checkList => checkList.id != id);
    })
  }

  getNewCheckPoint(): Checkpoint {
    return {
      id: 0,
      checkListId: 0,
      name: ""
    }
  }

}
