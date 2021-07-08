import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CheckList } from 'src/app/models/check-list';
import { CheckListService } from 'src/app/services/check-list.service';
import { CheckPointService } from 'src/app/services/check-point.service';
import { CheckpointModel } from './checkpoints/models/checkpoint-model';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.scss']
})
export class ChecklistDetailsComponent implements OnInit {

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

  getNewDataDialogModel(): CheckpointModel {
    let dataModel: CheckpointModel = {
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
      this.checkList.checkpoints = this.checkList.checkpoints.filter(checkPoint => checkPoint.id != id);
    })
  }

}
