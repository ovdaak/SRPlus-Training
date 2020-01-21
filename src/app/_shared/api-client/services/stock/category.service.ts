import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WareneingangCategoryRequestInterface, WareneingangCategoryResponseInterface } from '../../interfaces/stock/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly CATEGORIES_URL = [environment.baseUrl, 'getCategories'].join('/');

  constructor(private httpClient: HttpClient) { }

  getCategories(requestParams: WareneingangCategoryRequestInterface): Observable<WareneingangCategoryResponseInterface> {
    const params = {...requestParams};
    return this.httpClient.get<WareneingangCategoryResponseInterface>(this.CATEGORIES_URL, {params}).pipe(
      catchError(() => {
        const categoriesError: WareneingangCategoryResponseInterface = {categories: []};
        return of(categoriesError);
      })
    );
  }

}
