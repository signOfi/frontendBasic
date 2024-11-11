import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>("https://api.escuelajs.co/api/v1/users", user);
  }

  login(user: User): Observable<any> {
    return this.http.post<any>("https://api.escuelajs.co/api/v1/auth/login", user);
  }

  getToken(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    console.log("is cleared")
    localStorage.clear();
  }

}
