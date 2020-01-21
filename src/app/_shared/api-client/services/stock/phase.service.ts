import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WareneingangPhasesResponseInterface } from '../../interfaces/stock/phase.interface';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  readonly PHASES_URL = [environment.baseUrl, 'getPhases'].join('/');

  constructor(private httpClient: HttpClient) { }

  getPhases(): Observable<WareneingangPhasesResponseInterface> {
    return this.httpClient.get<WareneingangPhasesResponseInterface>(this.PHASES_URL).pipe(
      catchError(() => {
        const phasesError: WareneingangPhasesResponseInterface = {phases: []};
        return of(phasesError);
      })
    );
  }

}
