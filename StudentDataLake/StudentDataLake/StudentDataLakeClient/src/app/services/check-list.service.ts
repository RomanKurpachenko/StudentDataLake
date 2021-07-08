import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckList } from '../models/check-list';
import * as signalR from "@microsoft/signalr"

@Injectable({
    providedIn: 'root'
})
export class CheckListService {

    private url = `http://localhost:5000/api/checklists`;
    
    private signalUrl = `http://localhost:5000/hub/checkList`;

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

    getCheckLists(): Observable<CheckList[]>{
        return this.http.get<CheckList[]>(this.url);
    }

    getCheckList(id: number): Observable<CheckList>{
        return this.http.get<CheckList>(`${this.url}/${{id}}`);
    }

    create(data: CheckList): Observable<void> {
        return this.http.post<void>(this.url, data);
    }

    update(data: CheckList): Observable<void> {
        return this.http.put<void>(`${this.url}/${data.id}`, data);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}