import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RegionResponseInterface } from '../interfaces/region.interface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  readonly REGIONS_URL = [environment.baseUrl, 'getRegions'].join('/');

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<RegionResponseInterface> {
    return this.httpClient.get<RegionResponseInterface>(this.REGIONS_URL).pipe(
      catchError(() => {
        const regionsError: RegionResponseInterface = {regions: []};
        return of(regionsError);
      })
    );
  }

}
