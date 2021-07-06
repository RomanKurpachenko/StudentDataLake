import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckListDetailsComponent } from './check-list/check-list-details/check-list-details.component';
const routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'checkList/:id',
        component: CheckListDetailsComponent,
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