import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAuthenticationData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(
    private http: HttpClient
  ) { }

  public authenticateUserAccess(): Observable<UserAuthenticationData> {

    return this.http.get<UserAuthenticationData>('../../../assets/admin.json');

  }
}
