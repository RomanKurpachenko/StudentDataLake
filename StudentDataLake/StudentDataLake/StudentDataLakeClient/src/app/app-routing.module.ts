import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { StudentsComponent } from './students/students.component';

import { CheckListComponent } from './check-list/check-list.component';
import { CheckListDetailsComponent } from './check-list/check-list-details/check-list-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'checkList/:id',
    component: CheckListDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
