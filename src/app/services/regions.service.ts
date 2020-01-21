import { Injectable } from '@angular/core';
import { RegionResponseInterface } from '../interfaces/region-interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  readonly BASE_URL = '';
  readonly REGIONS_URL = this.BASE_URL + '/mobile/getRegions';

  regions: RegionResponseInterface;

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<RegionResponseInterface> {
    return this.httpClient.get<RegionResponseInterface>(this.REGIONS_URL).pipe(
      catchError(() => {
        const regionError: RegionResponseInterface = { regions: [] } as RegionResponseInterface;
        return of(regionError);
      })
    );
  }

  /* getRegions() {
    return {
      regions: [
        {id: '8', name: 'Deutschland', selected: true},
        {id: '1', name: 'Baden-Württemberg', selected: false},
        {id: '7', name: 'Bayern', selected: false},
        {id: '10', name: 'Berlin', selected: false},
        {id: '9', name: 'Brandenburg', selected: false},
        {id: '11', name: 'Bremen', selected: false},
        {id: '12', name: 'Hamburg', selected: false},
        {id: '2', name: 'Hessen', selected: false},
        {id: '13', name: 'Mecklenburg-Vorpommern', selected: false},
        {id: '14', name: 'Niedersachsen', selected: false},
        {id: '3', name: 'Rheinland', selected: false},
        {id: '4', name: 'Rheinland-Pfalz', selected: false},
        {id: '15', name: 'Saarland', selected: false},
        {id: '18', name: 'Sachsen', selected: false},
        {id: '19', name: 'Sachsen-Anhalt', selected: false},
        {id: '17', name: 'Schleswig-Holstein', selected: false},
        {id: '16', name: 'Thüringen', selected: false},
        {id: '5', name: 'Westfalen-Lippe', selected: false}
      ]
    };
  } */
}
