import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CheckListService = class CheckListService {
    constructor(http) {
        this.http = http;
        this.url = `http://localhost:5001/api/checkList`;
    }
    getCheckList() {
        return this.http.get(this.url);
    }
    createCheckList(data) {
        return this.http.post(this.url, data);
    }
};
CheckListService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CheckListService);
export { CheckListService };
//# sourceMappingURL=check-list.service.js.map