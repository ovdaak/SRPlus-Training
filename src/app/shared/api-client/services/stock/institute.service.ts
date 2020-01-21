import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WareneingangInstituteRequestInterface, WareneingangInstituteResponseInterface } from '../../interfaces/stock/institute.interface';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  readonly INSTITUTES_URL = [environment.baseUrl, 'getInstitutes'].join('/');

  constructor(private httpClient: HttpClient) { }

  getInstitutes(institutesRequest: WareneingangInstituteRequestInterface): Observable<WareneingangInstituteResponseInterface> {
    const params = {...institutesRequest};
    return this.httpClient.get<WareneingangInstituteResponseInterface>(this.INSTITUTES_URL, {params}).pipe(
      catchError(() => {
        const institutesError: WareneingangInstituteResponseInterface = {institutes: []};
        return of(institutesError);
      })
    );
  }

}
