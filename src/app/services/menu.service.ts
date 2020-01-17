import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuResponseInterface } from '../interfaces/menu.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly BASE_URL = '';
  readonly MENU_URL = this.BASE_URL + '/mobile/getMenu';

  constructor(private httpClient: HttpClient) { }

  getMenu(): Observable<MenuResponseInterface> {
    return this.httpClient.get<MenuResponseInterface>(this.MENU_URL).pipe(
      catchError(() => {
        const menuError: MenuResponseInterface = {} as MenuResponseInterface;
        return of(menuError);
      })
    );
  }

}
