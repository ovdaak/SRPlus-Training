import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegionResponseInterface } from '../interfaces/region.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  readonly REGIONS_URL = [environment.baseUrl, 'regions.json'].join('/');

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<RegionResponseInterface> {
    return this.httpClient.get<RegionResponseInterface>(this.REGIONS_URL);
  }

}
