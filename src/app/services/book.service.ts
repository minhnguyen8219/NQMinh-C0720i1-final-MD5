import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/Book';

const API_URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  getById(id: string | null): Observable<Book> {
    return this.httpClient.get<Book>(API_URL + `/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }

  deleteById(id: string): Observable<Book> {
    return this.httpClient.delete<Book>(API_URL + `/${id}`);
  }

  updateById(id: string, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(API_URL + `/${id}`, book);
  }

}
