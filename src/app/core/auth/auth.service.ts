import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserData } from '../models/types';

export const API_URL = 'https://apiappoint-9fd506694c0f.herokuapp.com';

export const API_ENDPOINTS = {
  main: '/',
  user: '/user',
  login: '/auth/login',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userData = 'system_data';
  private apiUrl = `${API_URL}${API_ENDPOINTS.login}`; // URL вашего API

  constructor(private http: HttpClient) {}

  login(login: string, pass: string): Observable<UserData> {
    return this.http
      .get<UserData>(this.apiUrl, { params: { login, pass } })
      .pipe(tap((response) => this.storeToken(response)));
  }

  logout(): void {
    localStorage.removeItem(this.userData);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return JSON.parse(localStorage.getItem(this.userData)!)?.token;
  }

  getUserId(): string | null {
    return JSON.parse(localStorage.getItem(this.userData)!)?.id;
  }

  private storeToken(user: UserData): void {
    localStorage.setItem(this.userData, JSON.stringify(user));
  }
}
