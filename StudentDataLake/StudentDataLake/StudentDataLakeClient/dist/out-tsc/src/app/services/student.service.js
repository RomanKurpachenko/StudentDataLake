import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.url = `${window.location.href}api/students`;
        this.signalrUrl = `${window.location.href}hub/students`;
        this.startConnection = () => {
            this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(this.signalrUrl)
                .build();
            this.hubConnection
                .start()
                .then(() => console.log('Connection started'))
                .catch(err => console.log('Error while starting connection: ' + err));
        };
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
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
};
StudentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StudentService);
export { StudentService };
//# sourceMappingURL=student.service.js.map