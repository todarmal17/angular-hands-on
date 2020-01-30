import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  setSessionStatus(sessionStatus: boolean): void {
    localStorage.setItem('loggedIn', JSON.stringify(sessionStatus));
  }
  getSessionStatus(): boolean {
    return JSON.parse(localStorage.getItem('loggedIn'));
  }
}
