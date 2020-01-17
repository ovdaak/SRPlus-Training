import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangArticleRequestInterface, WareneingangArticleResponseInterface } from '../../interfaces/stock/stock.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  readonly ARTICLES_URL = [environment.baseUrl, 'getArticles'].join('/');

  constructor(private httpClient: HttpClient) { }

  getArticles(articlesRequest: WareneingangArticleRequestInterface): Observable<WareneingangArticleResponseInterface> {
    return this.httpClient.post<WareneingangArticleResponseInterface>(this.ARTICLES_URL, articlesRequest);
  }

}
