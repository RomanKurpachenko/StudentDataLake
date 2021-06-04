import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StudentsComponent = class StudentsComponent {
    constructor(spinner, studentService) {
        this.spinner = spinner;
        this.studentService = studentService;
    }
    ngOnInit() {
        this.spinner.show();
        this.studentService.getStudents().subscribe(result => {
            if (result) {
                this.students = result;
                this.spinner.hide();
            }
        }, error => {
            console.log("Нет данных, потому что ошибка");
            this.students = [];
            this.spinner.hide();
        });
    }
};
StudentsComponent = __decorate([
    Component({
        selector: 'app-students',
        templateUrl: './students.component.html',
        styleUrls: ['./students.component.scss']
    })
], StudentsComponent);
export { StudentsComponent };
//# sourceMappingURL=students.component.js.map