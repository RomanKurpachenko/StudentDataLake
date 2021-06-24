import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckList } from '../models/check-list';

@Injectable({
    providedIn: 'root'
})
export class CheckListService {

    private url = `http://localhost:5001/api/checkList`;

    constructor(private http: HttpClient) {  
    }

    getCheckLists(): Observable<CheckList[]>{
        return this.http.get<CheckList[]>(this.url);
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