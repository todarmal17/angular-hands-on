import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AccessService } from 'src/app/shared/access/access.service';
import { UserAuthenticationData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  isLoggedIn: Subject<boolean> = new Subject<boolean>();

  userData: UserAuthenticationData;

  constructor(
    protected accessService: AccessService
  ) { }

  public authenticateUserManager(): Observable<boolean> {

    this.accessService.authenticateUserAccess().subscribe((response: UserAuthenticationData) => {

      if (response.username === this.userData.username && response.password === this.userData.password) {

        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
      }
    });

    return this.isLoggedIn.asObservable();
  }
}
