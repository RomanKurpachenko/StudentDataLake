import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ValueService = class ValueService {
    constructor(http) {
        this.http = http;
    }
    getValues() {
        return this.http.get("https://localhost:5001/api/values");
    }
};
ValueService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ValueService);
export { ValueService };
//# sourceMappingURL=value.service.js.map