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
    create(data) {
        return this.http.post(this.url, data);
    }
    update(data) {
        return this.http.put(`${this.url}/${data.id}`, data);
    }
};
StudentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map