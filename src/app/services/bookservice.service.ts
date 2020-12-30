import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  googleapiurl = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getListStudent(): Observable<any> {
    return this.http.get<any>(this.googleapiurl);
  }
}
