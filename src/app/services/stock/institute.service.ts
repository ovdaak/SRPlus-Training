import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  readonly BASE_URL = '';
  readonly INSTITUTES_URL = this.BASE_URL + '/mobile/getLocations';

  constructor(private httpClient: HttpClient) { }

  getArticles(locationsRequest: WareneingangLocationsRequestInterface): Observable<WareneingangLocationsResponseInterface> {
    return this.httpClient.post<WareneingangLocationsResponseInterface>(this.LOCATIONS_URL, locationsRequest);
  }

}
