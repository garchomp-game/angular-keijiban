import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  public login(name: string, password: string): void {
    const url = 'http://localhost:3000/login';
    let observable: Observable<any>;
    observable = this.http.post(url, {name, password});
    observable.subscribe(data => localStorage.setItem('token', data.token));
  }
}
