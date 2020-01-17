import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangPhasesResponseInterface } from 'src/app/interfaces/stock/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  readonly BASE_URL = '';
  readonly PHASES_URL = this.BASE_URL + '/mobile/getPhases';

  constructor(private httpClient: HttpClient) { }

  getPhases(): Observable<WareneingangPhasesResponseInterface> {
    return this.httpClient.get<WareneingangPhasesResponseInterface>(this.PHASES_URL);
  }

}
