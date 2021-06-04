import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = `http://localhost:5001/api/student`;

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }
}
