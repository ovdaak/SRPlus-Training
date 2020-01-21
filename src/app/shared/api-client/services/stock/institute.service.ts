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

  readonly INSTITUTES_URL = [environment.baseUrl, 'getInstitute'].join('/');

  constructor(private httpClient: HttpClient) { }

  getInstitutes(institutesRequest: WareneingangInstituteRequestInterface): Observable<WareneingangInstituteResponseInterface> {
    return this.httpClient.post<WareneingangInstituteResponseInterface>(this.INSTITUTES_URL, institutesRequest).pipe(
      catchError(() => {
        const institutesError: WareneingangInstituteResponseInterface = {institutes: []};
        return of(institutesError);
      })
    );
  }

}
