import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CheckPoint } from '../models/check-point';

@Injectable({
    providedIn: 'root'
})
export class CheckPointService{
    private url = `http://localhost:5001/api/checkPoint`;

    constructor(private http: HttpClient) {  
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