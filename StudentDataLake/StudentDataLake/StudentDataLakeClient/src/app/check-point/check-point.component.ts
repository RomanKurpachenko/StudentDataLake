
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

import { CheckPoint } from '../models/check-point';
import { CheckPointService } from '../services/check-point.service';
import { CheckPointModel } from './models/check-point-model';
import { CheckPointDialogComponent } from './check-point-dialog/check-point-dialog.component';


@Component({
  selector: 'app-check-point',
  templateUrl: './check-point.component.html',
  styleUrls: ['./check-point.component.scss']
})
export class CheckPointComponent implements OnInit {

  checkPoints: CheckPoint[] = [
    {
      id: 0,
      checkListId: 0,
      name: ""
    },
    {
      id: 0,
      checkListId: 0,
      name: ""
    },
    {
      id: 0,
      checkListId: 0,
      name: ""
    },
    {
      id: 0,
      checkListId: 0,
      name: ""
    },
    {
      id: 0,
      checkListId: 0,
      name: ""
    }
  ];

  constructor(
    private spinner: NgxSpinnerService,
    private checkPointService: CheckPointService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCheckPoints();
  }

  getCheckPoints(){
    this.spinner.show();
    this.checkPointService.getCheckPoints().subscribe(result => {
      if(result) {
        this.checkPoints = result;
        this.spinner.hide();
      }
    }, error => {
      this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
      this.checkPoints = [];
      this.spinner.hide();
    });
  }

  openDialog(isNewCheckPoint: boolean, checkPoint: CheckPoint = null): void {
    const dialogRef = this.dialog.open(CheckPointDialogComponent, {
      width: '300px',
      data: this.getDataForDialog(isNewCheckPoint, checkPoint)
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.isNewCheckPoint){
        this.checkPointService.create(data.checkPoint).subscribe(result => {
          this.openSnackBar("Новый контрольный список студента был добавлен", "Отлично");
          this.getCheckPoints();
        });
      } else{
        this.checkPointService.update(data.checkPoint).subscribe(result => {
          this.openSnackBar("Данные были успешно обновлены", "Отлично");
        });
      }
    });
  }

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
    });
  }

  getDataForDialog(isNewCheckPoint: boolean, checkPoint: CheckPoint = null): CheckPointModel{
    if(isNewCheckPoint){
      return {
        checkPoint: this.getNewCheckPoint(),
        isNewCheckPoint: isNewCheckPoint
      }
    } else{
      return {
        checkPoint: checkPoint,
        isNewCheckPoint: isNewCheckPoint
      }
    }
  }

  deleteCheckPoint(id: number){
    this.checkPointService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалено", "Хорошо");
      this.checkPoints = this.checkPoints.filter(checkList => checkList.id != id);
    })
  }

  getNewCheckPoint(): CheckPoint {
    return {
      id: 0,
      checkListId: 0,
      name: ""
    }
  }
}
