import { Injectable } from '@angular/core';
import { SessionManagerService } from './manager/session-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private sessionManager: SessionManagerService
  ) { }

  isAuthenticated(): boolean {
    if (this.sessionManager.getSessionStatus()) {
      return true;
    }
    return false;
  }
}
