import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredentials } from '../interfaces/auth-credentials.interface';
import { AuthToken } from '../interfaces/auth-toke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private http: HttpClient) { }

  signIn(credentials: AuthCredentials): Observable<AuthToken>{
    return this.http.post<AuthToken>('/signin', credentials);
  }
}
