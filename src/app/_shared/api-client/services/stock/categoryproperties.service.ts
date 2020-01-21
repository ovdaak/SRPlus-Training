import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WareneingangCategoryPropertiesRequestInterface, WareneingangCategoryPropertiesResponseInterface } from '../../interfaces/stock/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryPropertiesService {

  readonly CATEGORYPROPERTIES_URL = [environment.baseUrl, 'getCategoryProperties'].join('/');

  constructor(private httpClient: HttpClient) { }

  getCategoryProperties(categorypropertiesRequest: WareneingangCategoryPropertiesRequestInterface): Observable<WareneingangCategoryPropertiesResponseInterface> {
    const params = {...categorypropertiesRequest};
    return this.httpClient.get<WareneingangCategoryPropertiesResponseInterface>(this.CATEGORYPROPERTIES_URL, {params}).pipe(
      catchError(() => {
        const catpropError: WareneingangCategoryPropertiesResponseInterface = {} as WareneingangCategoryPropertiesResponseInterface;
        return of(catpropError);
      })
    );
  }
}
