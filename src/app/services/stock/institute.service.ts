import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangInstituteRequestInterface } from 'src/app/interfaces/stock/institute.interface';
import { WareneingangInstituteResponseInterface } from 'src/app/interfaces/stock/institute.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  readonly INSTITUTES_URL = [environment.baseUrl, 'getInstitute'].join('/');

  constructor(private httpClient: HttpClient) { }

  getInstitutes(institutesRequest: WareneingangInstituteRequestInterface): Observable<WareneingangInstituteResponseInterface> {
    return this.httpClient.post<WareneingangInstituteResponseInterface>(this.INSTITUTES_URL, institutesRequest);
  }

}
