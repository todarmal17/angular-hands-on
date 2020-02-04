import { Injectable } from '@angular/core';
import { SessionManagerService } from './manager/session-manager.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(
    private sessionManager: SessionManagerService
  ) { }

  connectToAuth(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  isAuthenticated(): boolean {
    console.log('authenticated called');

    if (this.sessionManager.getSessionStatus()) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }
  }
}
