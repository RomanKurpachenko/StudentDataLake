import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CheckList } from 'src/app/models/check-list';
import { CheckListService } from 'src/app/services/check-list.service';

import { CheckPoint } from 'src/app/models/check-point';
import { CheckPointModel } from 'src/app/check-point/models/check-point-model';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckPointService } from 'src/app/services/check-point.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckPointDialogComponent } from 'src/app/check-point/check-point-dialog/check-point-dialog.component';

@Component({
  selector: 'app-check-list-details',
  templateUrl: './check-list-details.component.html',
  styleUrls: ['./check-list-details.component.scss']
})
export class CheckListDetailsComponent implements OnInit {

  id: number;

  checkList: CheckList;

  constructor(
    private checkPointService: CheckPointService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private checkListService: CheckListService
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params.id;

    window.alert(this.id)

    this.checkListService.getCheckList(this.id).subscribe(result => {
      if (result) {
        this.checkList = result;
      }
    });
  }

  getNewDataDialogModel(): CheckPointModel {
    let dataModel: CheckPointModel = {
      isNewCheckPoint: true,
      checkPoint: {
        id: 0,
        checkListId: this.id,
        name: ""
      },
      isDataAddedOrUpdated: false
    }

    return dataModel;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
    });
  }

  deleteCheckPoint(id: number) {
    this.checkPointService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалены", "Хорошо");
      this.checkList.checkPoints = this.checkList.checkPoints.filter(checkPoint => checkPoint.id != id);
    })
  }
}
