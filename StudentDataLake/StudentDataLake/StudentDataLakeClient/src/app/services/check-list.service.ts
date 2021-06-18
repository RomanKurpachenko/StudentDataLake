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

    getCheckList(): Observable<CheckList[]>{
        return this.http.get<CheckList[]>(this.url);
    }

    createCheckList(data: CheckList): Observable<void> {
        return this.http.post<void>(this.url, data);
    }
}