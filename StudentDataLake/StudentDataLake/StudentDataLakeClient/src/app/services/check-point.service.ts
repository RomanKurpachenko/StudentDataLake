import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';

import { CheckPoint } from '../models/check-point';

@Injectable({
    providedIn: 'root'
})
export class CheckPointService{
    private url = `${window.location.href}api/checkPoint`;

    private signalUrl = `${window.location.href}hub/checkList`;

    public hubConnection: signalR.HubConnection;

    constructor(private http: HttpClient) {  
    }

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(this.signalUrl)
            .build();
        this.hubConnection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err))
    }

    getCheckPoints(): Observable<CheckPoint[]>{
        return this.http.get<CheckPoint[]>(this.url);
    }

    create(data: CheckPoint): Observable<void> {
        return this.http.post<void>(this.url, data);
    }

    update(data: CheckPoint): Observable<void> {
        return this.http.put<void>(`${this.url}/${data.id}`, data);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}
