import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WareneingangLocationsRequestInterface, WareneingangLocationsResponseInterface } from 'src/app/interfaces/stock/location.interface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly LOCATIONS_URL = [environment.baseUrl, 'getLocations'].join('/');

  constructor(private httpClient: HttpClient) { }

  getLocations(locationsRequest: WareneingangLocationsRequestInterface): Observable<WareneingangLocationsResponseInterface> {
    return this.httpClient.post<WareneingangLocationsResponseInterface>(this.LOCATIONS_URL, locationsRequest).pipe(
      catchError(() => {
        const locationsError: WareneingangLocationsResponseInterface = {locations: []};
        return of(locationsError);
      })
    );
  }

}
