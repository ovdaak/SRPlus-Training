import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegionResponseInterface, UserLogonResponseInterface, UserLogonRequestInterface } from '../interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = '';
  regionsURL = this.baseURL + '/mobile/getRegions';
  loginURL = this.baseURL + '/mobile/doLogon';

  logonRequest: UserLogonRequestInterface = {
    srp_username: '',
    srp_password: '',
    srp_region: 0
  }

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<RegionResponseInterface> {
    return this.httpClient.get<RegionResponseInterface>(this.regionsURL);
  }

  doLogon(): Observable<UserLogonResponseInterface> {
    return this.httpClient.post<UserLogonResponseInterface>(this.loginURL, this.logonRequest);
  }

}
