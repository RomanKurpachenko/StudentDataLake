import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { StudentsComponent } from './students/students.component';

import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistDetailsComponent } from './checklist/checklist-details/checklist-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'checkList/:id',
    component: ChecklistDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
