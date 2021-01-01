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
  hello = 'http://localhost:9002/user/connected';
  user = 'admin';
  password = 'admin';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin:admin'),
    }),
  };
  headerOptions: any;
  constructor(private http: HttpClient) {}
  // Headers = new HttpHeaders({
  //   Authorization: 'Basic ' + btoa(this.user + ':' + this.password),
  // });
  getListStudent(): Observable<any> {
    return this.http.get<any>(this.googleapiurl);
  }

  getConnectedUser(): Observable<any> {
    return this.http.get<any>(this.hello);
  }

  storeBook(book: Book): Observable<Book> {
    sessionStorage.setItem('user', this.user);
    let authString = 'Basic ' + btoa(this.user + ':' + this.password);
    sessionStorage.setItem('basicauth', authString);
    console.log(this.base_url + 'book/add');
    // return this.http.post<Book>(this.base_url + 'book/add', { Headers });
    return this.http.post<Book>(this.base_url + 'book/add', {
      headers: this.headerOptions,
    });
  }
}
