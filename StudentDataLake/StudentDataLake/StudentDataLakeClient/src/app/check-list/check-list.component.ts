import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckList } from '../models/check-list';
import { CheckListService } from '../services/check-list.service';
import { CheckListModel } from './models/check-list-model';
import { CheckListDialogComponent } from './check-list-dialog/check-list-dialog.component';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  checkLists: CheckList[];

  constructor(
    private spinner: NgxSpinnerService,
    private checkListService: CheckListService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCheckLists();
  }

  getCheckLists(){
    this.spinner.show();
    this.checkListService.getCheckLists().subscribe(result => {
      if(result) {
        this.checkLists = result;
        this.spinner.hide();
      }
    }, error => {
      this.openSnackBar("Ошибка, невозможно прочитать данные", "Принято");
      this.checkLists = [];
      this.spinner.hide();
    });
  }

  openDialog(isNewCheckList: boolean, checkList: CheckList = null): void {
    const dialogRef = this.dialog.open(CheckListDialogComponent, {
      width: '300px',
      data: this.getDataForDialog(isNewCheckList, checkList)
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.isNewCheckList){
        this.checkListService.create(data.checkList).subscribe(result => {
          this.openSnackBar("Новый контрольный список студента был добавлен", "Отлично");
          this.getCheckLists();
        });
      } else{
        this.checkListService.update(data.checkList).subscribe(result => {
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

  getDataForDialog(isNewCheckList: boolean, checkList: CheckList = null): CheckListModel{
    if(isNewCheckList){
      return {
        checkList: this.getNewCheckList(),
        isNewCheckList: isNewCheckList
      }
    } else{
      return {
        checkList: checkList,
        isNewCheckList: isNewCheckList
      }
    }
  }

  getNewCheckList(): CheckList {
    return {
      id: 0,
      name: "TestCheckList",
      level: 0
    }
  }

  deleteCheckList(id: number){
    this.checkListService.delete(id).subscribe(result => {
      this.openSnackBar("Данные были успешно удалено", "Хорошо");
      this.checkLists = this.checkLists.filter(checkList => checkList.id != id);
    })
  }
}
