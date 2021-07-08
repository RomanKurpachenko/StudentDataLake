import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
let CheckListService = class CheckListService {
    constructor(http) {
        this.http = http;
        this.url = `http://localhost:5000/api/checklists`;
        this.signalUrl = `http://localhost:5000/hub/checkList`;
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
    getCheckLists() {
        return this.http.get(this.url);
    }
    getCheckList(id) {
        return this.http.get(`${this.url}/${{ id }}`);
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