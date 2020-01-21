import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuResponseInterface } from '../interfaces/menu.interface';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  readonly MENU_URL = [environment.baseUrl, 'getMenu'].join('/');

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
