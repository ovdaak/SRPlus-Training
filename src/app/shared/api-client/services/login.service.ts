import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserLogonResponseInterface, UserLogonRequestInterface } from '../interfaces/login.interface';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly LOGIN_URL = [environment.baseUrl, 'doLogon'].join('/');

  /*
  logonRequest: UserLogonRequestInterface = {
    srp_username: 'js1',
    srp_password: 'js1',
    srp_region: 1
  }
  */

  constructor(private httpClient: HttpClient) { }

  doLogon(logonRequest: UserLogonRequestInterface): Observable<UserLogonResponseInterface> {
    return this.httpClient.post<UserLogonResponseInterface>(this.LOGIN_URL, logonRequest).pipe(
      catchError(() => {
        const logonError: UserLogonResponseInterface = {} as UserLogonResponseInterface;
        return of(logonError);
      })
    );
  }

}
