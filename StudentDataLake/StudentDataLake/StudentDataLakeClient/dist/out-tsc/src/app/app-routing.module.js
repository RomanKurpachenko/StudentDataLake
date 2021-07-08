import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChecklistDetailsComponent } from './checklist/checklist-details/checklist-details.component';
const routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'checkList/:id',
        component: ChecklistDetailsComponent,
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