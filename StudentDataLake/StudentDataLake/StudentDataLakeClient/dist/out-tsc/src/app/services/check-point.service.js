import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CheckPointService = class CheckPointService {
    constructor(http) {
        this.http = http;
        this.url = `http://localhost:5001/api/checkPoint`;
    }
    getCheckPoints() {
        return this.http.get(this.url);
    }
    create(data) {
        return this.http.post(this.url, data);
    }
    update(data) {
        return this.http.put(`${this.url}/${data.id}`, data);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
};
CheckPointService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CheckPointService);
export { CheckPointService };
//# sourceMappingURL=check-point.service.js.map