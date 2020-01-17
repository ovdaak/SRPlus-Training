import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WareneingangCategoryPropertiesRequestInterface } from 'src/app/interfaces/stock/category.interface';
import { WareneingangCategoryPropertiesResponseInterface } from 'src/app/interfaces/stock/category.interface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryPropertiesService {

  readonly CATEGORYPROPERTIES_URL = [environment.baseUrl, 'getCategoryProperties'].join('/');

  constructor(private httpClient: HttpClient) { }

  getCategoryProperties(categorypropertiesRequest: WareneingangCategoryPropertiesRequestInterface): Observable<WareneingangCategoryPropertiesResponseInterface> {
    return this.httpClient.post<WareneingangCategoryPropertiesResponseInterface>(this.CATEGORYPROPERTIES_URL, categorypropertiesRequest).pipe(
      catchError(() => {
        const catpropError: WareneingangCategoryPropertiesResponseInterface = {} as WareneingangCategoryPropertiesResponseInterface;
        return of(catpropError);
      })
    );
  }
}
