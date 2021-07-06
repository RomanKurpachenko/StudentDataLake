import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
let CheckPointService = class CheckPointService {
    constructor(http) {
        this.http = http;
        this.url = `${window.location.href}api/checkPoint`;
        this.signalUrl = `${window.location.href}hub/checkList`;
        this.startConnection = () => {
            this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(this.signalUrl)
                .build();
            this.hubConnection
                .start()
                .then(() => console.log('Connection started'))
                .catch(err => console.log('Error while starting connection: ' + err));
        };
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