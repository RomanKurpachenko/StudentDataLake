import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = `${window.location.href}api/students`;

  private signalrUrl = `${window.location.href}hub/students`;

  public hubConnection: signalR.HubConnection;

  constructor(private http: HttpClient) {
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.signalrUrl)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
      
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
    
  }

  create(data: Student): Observable<void> {
    return this.http.post<void>(this.url, data);
  }

  update(data: Student): Observable<void> {
    return this.http.put<void>(`${this.url}/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
