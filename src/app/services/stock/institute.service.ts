import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangInstituteRequestInterface, WareneingangInstituteResponseInterface } from 'src/app/interfaces/stock/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  readonly BASE_URL = '';
  readonly INSTITUTES_URL = this.BASE_URL + '/mobile/getInstitute';

  constructor(private httpClient: HttpClient) { }

  getInstitutes(institutesRequest: WareneingangInstituteRequestInterface): Observable<WareneingangInstituteResponseInterface> {
    return this.httpClient.post<WareneingangInstituteResponseInterface>(this.INSTITUTES_URL, institutesRequest);
  }

}
