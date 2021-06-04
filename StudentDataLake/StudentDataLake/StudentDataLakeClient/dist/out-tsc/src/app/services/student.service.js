import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.url = `http://localhost:5001/api/student`;
    }
    getStudents() {
        return this.http.get(this.url);
    }
};
StudentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map