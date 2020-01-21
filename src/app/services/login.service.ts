import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserLogonResponseInterface, UserLogonRequestInterface } from '../interfaces/login-interface';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly BASE_URL = '';
  readonly LOGIN_URL = this.BASE_URL + '/mobile/doLogon';

  /*
  logonRequest: UserLogonRequestInterface = {
    srp_username: 'js1',
    srp_password: 'js1',
    srp_region: 1
  }
  */

  constructor(private httpClient: HttpClient) { }

  doLogon(logonRequest: UserLogonRequestInterface): Observable<UserLogonResponseInterface> {
    return this.httpClient.post<UserLogonResponseInterface>(this.LOGIN_URL, new HttpParams()
      .set('APPNAME', 'srp_Control')
      .set('PRGNAME', 'srpGenericControl')
      .set('ARGUMENTS', '-N0,-A,-N11,N0')
      .set('resx', '1680')
      .set('resy', '800')
      .set('reusesid', '0')
      .set('reusesiduserid', '0')
      .set('reusesidwinid', '0')
      .set('logonpage', '1')
      .set('srp_username', encodeURIComponent(logonRequest.srp_username))
      .set('srp_password', this.base64EncodeUnicode(logonRequest.srp_password))
      .set('srp_region', logonRequest.srp_region.toString()),	{
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      catchError(() => {
        const logonError: UserLogonResponseInterface = {} as UserLogonResponseInterface;
        return of(logonError);
      })
    );
  }

  isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  base64EncodeUnicode(str: string) {
    // First we escape the string using encodeURIComponent to get the UTF-8 encoding of the characters,
    // then we convert the percent encodings into raw bytes, and finally feed it to btoa() function.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt('0x' + p1, 16));
    }));
  }
}
