import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WareneingangLocationsRequestInterface, WareneingangLocationsResponseInterface } from '../../interfaces/stock/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly LOCATIONS_URL = [environment.baseUrl, 'getLocations'].join('/');

  constructor(private httpClient: HttpClient) { }

  getLocations(locationsRequest: WareneingangLocationsRequestInterface): Observable<WareneingangLocationsResponseInterface> {
    const params = {...locationsRequest};
    return this.httpClient.get<WareneingangLocationsResponseInterface>(this.LOCATIONS_URL, {params}).pipe(
      catchError(() => {
        const locationsError: WareneingangLocationsResponseInterface = {locations: []};
        return of(locationsError);
      })
    );
  }

}
