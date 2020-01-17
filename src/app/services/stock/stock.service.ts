import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangArticleRequestInterface, WareneingangLocationsResponseInterface } from '../../interfaces/stock/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  readonly BASE_URL = '';
  readonly ARTICLES_URL = this.BASE_URL + '/mobile/getArticles';

  constructor(private httpClient: HttpClient) { }

  getArticles(institutesRequest: WareneingangArticleRequestInterface): Observable<WareneingangLocationsResponseInterface> {
    return this.httpClient.post<WareneingangLocationsResponseInterface>(this.ARTICLES_URL, institutesRequest);
  }

}
