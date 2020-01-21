import { Injectable } from '@angular/core';
import { State } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class GlobalState<T extends object> extends State<T> {

  constructor() {
    super();

  }
}
