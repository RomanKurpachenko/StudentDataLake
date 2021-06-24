import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CheckListService = class CheckListService {
    constructor(http) {
        this.http = http;
        this.url = `http://localhost:5001/api/checkList`;
    }
    getCheckLists() {
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
CheckListService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CheckListService);
export { CheckListService };
//# sourceMappingURL=check-list.service.js.map