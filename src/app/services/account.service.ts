import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { RegisterDto } from 'src/app/models/registerDto';
import { LoginDto } from 'src/app/models/loginDto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  register(user: RegisterDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('https://localhost:44357/api/account/Register', user);
  }
  login(user: LoginDto): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('https://localhost:44357/api/account/Login', user);
  }
}
