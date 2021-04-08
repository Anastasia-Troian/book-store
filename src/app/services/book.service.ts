import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDto } from 'src/app/models/bookDto';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBooks(): Observable<ApiResponse>{
      return this.http.get<ApiCollectionResponse>("https://localhost:44357/api/book");
    }
  
    deleteBook(id: number): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>('https://localhost:44357/api/book?id=' + id);
    }
  
    addBook(category: BookDto): Observable<ApiResponse>{
      return this.http.post<ApiResponse>('https://localhost:44357/api/book',category);
    } 
  
    updateBook(category: BookDto): Observable<ApiResponse>{
      return this.http.post<ApiResponse>('https://localhost:44357/api/book/Update',category);
    } 

}
