import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangLocationsRequestInterface, WareneingangLocationsResponseInterface } from 'src/app/interfaces/stock/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly BASE_URL = '';
  readonly LOCATIONS_URL = this.BASE_URL + '/mobile/getLocations';

  constructor(private httpClient: HttpClient) { }

  getLocations(locationsRequest: WareneingangLocationsRequestInterface): Observable<WareneingangLocationsResponseInterface> {
    return this.httpClient.post<WareneingangLocationsResponseInterface>(this.LOCATIONS_URL, locationsRequest);
  }

}
