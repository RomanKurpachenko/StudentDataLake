import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckList } from '../models/check-list';
import { CheckListService } from '../services/check-list.service';
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
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.checkListService.getCheckList().subscribe(result => {
      if(result) {
        this.checkLists = result;
        this.spinner.hide();
      }
    }, error => {
      console.log("Нет данных по check-list");
      this.checkLists = [];
      this.spinner.hide();
    });
  }

  getNewCheckList(): CheckList {
    return {
      id: 0,
      name: "0checkList",
      level: 0
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckListDialogComponent, {
      width: '300px',
      data: this.getNewCheckList()
    });

    dialogRef.afterClosed().subscribe(data => {
      this.checkListService.createCheckList(data).subscribe(result => {
        this.checkLists.push(data);
      })
    });
  }

}
