import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpService {

  constructor() { }

  saveSession(token: string): void {
    localStorage.setItem('token', token);
  }
}
