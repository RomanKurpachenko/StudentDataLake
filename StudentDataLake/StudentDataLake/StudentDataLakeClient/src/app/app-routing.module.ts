import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CheckPointComponent } from './check-point/check-point.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'check-lists',
    component: CheckListComponent,
  },
  {
    path: 'check-points',
    component: CheckPointComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
