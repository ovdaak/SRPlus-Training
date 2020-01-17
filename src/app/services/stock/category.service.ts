import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangCategoryRequestInterface, WareneingangCategoryResponseInterface } from 'src/app/interfaces/stock/category.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly CATEGORIES_URL = [environment.baseUrl, 'getCategories'].join('/');

  constructor(private httpClient: HttpClient) { }

  getCategories(categoriesRequest: WareneingangCategoryRequestInterface): Observable<WareneingangCategoryResponseInterface> {
    return this.httpClient.post<WareneingangCategoryResponseInterface>(this.CATEGORIES_URL, categoriesRequest);
  }

}
