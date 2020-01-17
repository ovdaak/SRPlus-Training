import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WareneingangCategoryRequestInterface, WareneingangCategoryResponseInterface } from 'src/app/interfaces/stock/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly BASE_URL = '';
  readonly CATEGORY_URL = this.BASE_URL + '/mobile/getCategory';

  constructor(private httpClient: HttpClient) { }

  getCategory(categoryRequest: WareneingangCategoryRequestInterface): Observable<WareneingangCategoryResponseInterface> {
    return this.httpClient.post<WareneingangCategoryResponseInterface>(this.CATEGORY_URL, categoryRequest);
  }

}
