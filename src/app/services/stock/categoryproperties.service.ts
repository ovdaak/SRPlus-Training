import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangCategoryPropertiesRequestInterface } from 'src/app/interfaces/stock/category.interface';
import { WareneingangCategoryPropertiesResponseInterface } from 'src/app/interfaces/stock/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryPropertiesService {

  readonly CATEGORYPROPERITES_URL = [environment.baseUrl, 'getCategories'].join('/');

  constructor(private httpClient: HttpClient) { }

  getCategoryProperties(categorypropertiesRequest: WareneingangCategoryPropertiesRequestInterface): Observable<WareneingangCategoryPropertiesResponseInterface> {
    return this.httpClient.post<WareneingangCategoryPropertiesResponseInterface>(this.CATEGORYPROPERITES_URL, categorypropertiesRequest);
  }
}
