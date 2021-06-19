import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
const routes = [
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
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map