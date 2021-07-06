import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { CheckList } from '../models/check-list';
import { CheckListService } from '../services/check-list.service';
import { CheckListModel } from './models/check-list-model';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';

import { CheckPoint } from '../models/check-point';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  checkLists: CheckList[] = null;

  dataDialogModel: CheckListModel = this.getNewDataDialogModel();

  displayedColumns: string[] = [
    'id',
    'name',
    'level'
  ];

  dataSource = new MatTableDataSource(this.checkLists);

  constructor(
    private spinner: NgxSpinnerService,
    private checkListService: CheckListService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
   

    this.getCheckLists();

    this.startConnections();
  }

  getNewDataDialogModel(
  ): CheckListModel {

    let dataModel: CheckListModel = {
      isNewCheckList: true,
      checkList: {
        id: 0,
        name: "",
        level: 0,
        checkPoints: []
      },
      isDataAddedOrUpdated: false
    }

    return dataModel;
  }

  getCheckLists(){
    this.spinner.show();
    this.checkListService.getCheckLists().subscribe(result => {
      if(result) {
        this.checkLists = result;
        this.dataSource = new MatTableDataSource(this.checkLists);
        this.spinner.hide();
      }
    }, error => {
      this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
      this.checkLists = [];
      this.spinner.hide();
    });
  }

  startConnections(){

    this.checkListService.startConnection();

    this.checkListService.hubConnection.on('NewCheckListMessage', (result: CheckList) => {
      console.log(result);
      if(result) {
        this.checkLists.push(result);
        this.dataSource = new MatTableDataSource(this.checkLists);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCheckListDialog(
    isNewCheckList: boolean,
    checkList: CheckList = null
  ): void{

    if(!isNewCheckList) {
      this.dataDialogModel.isNewCheckList = false;
      this.dataDialogModel.checkList = checkList;
      this.dataDialogModel.isDataAddedOrUpdated = false;
    } else {
      if (this.dataDialogModel.isDataAddedOrUpdated) {
        this.dataDialogModel = this.getNewDataDialogModel();
      }
    }

    const dialogRef = this.dialog.open(CheckListDialogComponent, {
      width: '300px',
      data: this.dataDialogModel
    });
  }

  openCreatingDialog() {
    this.openCheckListDialog(true);
  }

  openUpdatingDialog(checkList: CheckList) {
    this.openCheckListDialog(false, checkList);
  }



  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: "snack-height"
    });
  }

  deleteCheckList(id: number){
    this.checkListService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалены", "Хорошо");
      this.checkLists = this.checkLists.filter(checkList => checkList.id != id);
    })
  }
}