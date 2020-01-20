import { LogonResponseInterface } from './../interfaces/logon-response-interface';
import { LogonRequestInterface } from './../interfaces/logon-request-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogonService {
  private readonly AUTHURL = '/assets/logon.json';

  constructor(public http: HttpClient) { 
  }

  doLogon(logonData: LogonRequestInterface): Observable<LogonResponseInterface> {
    return this.http.post<LogonResponseInterface>(this.AUTHURL, new HttpParams()
      .set('APPNAME', 'srp_Control')
      .set('PRGNAME', 'srpGenericControl')
      .set('ARGUMENTS', '-N0,-A,-N11,N0')
      .set('resx', '1680')
      .set('resy', '800')
      .set('reusesid', '0')
      .set('reusesiduserid', '0')
      .set('reusesidwinid', '0')
      .set('logonpage', '1')
      .set('srp_username', encodeURIComponent(logonData.srpUsername))
      .set('srp_password', this.base64EncodeUnicode(logonData.srpPassword))
      .set('srp_region', logonData.srpRegion.toString()),	{
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  public setAccessToken(at: string) {
    localStorage.setItem('ACCESS_TOKEN', at);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public doLogout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  base64EncodeUnicode(str: string) {
    // First we escape the string using encodeURIComponent to get the UTF-8 encoding of the characters,
    // then we convert the percent encodings into raw bytes, and finally feed it to btoa() function.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode(parseInt('0x' + p1, 16));
    }));
  }
}
