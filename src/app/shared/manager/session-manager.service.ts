import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  setSessionStatus(sessionStatus: boolean): Promise<void> {
    localStorage.setItem('loggedIn', JSON.stringify(sessionStatus));

    return;
  }
  getSessionStatus(): boolean {
    return JSON.parse(localStorage.getItem('loggedIn'));
  }
}
