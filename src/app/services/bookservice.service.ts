import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../books/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  googleapiurl = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
  base_url = 'http://localhost:9002/bookstore/';
  user = 'admin';
  password = 'admin';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.user + ':' + this.password),
    }),
  };
  constructor(private http: HttpClient) {}

  getListStudent(): Observable<any> {
    return this.http.get<any>(this.googleapiurl);
  }

  storeBook(book: Book): Observable<Book> {
    console.log(this.base_url + 'book/add');
    return this.http.post<Book>(
      this.base_url + 'book/add',
      JSON.stringify(book),
      this.httpOptions
    );
  }
}
