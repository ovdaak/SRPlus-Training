import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegionResponseInterface } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  readonly BASE_URL = '';
  readonly REGIONS_URL = this.BASE_URL + '/mobile/getRegions';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<RegionResponseInterface> {
    return this.httpClient.get<RegionResponseInterface>(this.REGIONS_URL);
  }

}
