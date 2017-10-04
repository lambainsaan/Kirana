import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';
import { ITEMS } from '../shared/Items';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return Observable.of(ITEMS).delay(2000);
  }
  getItem(id: number): Observable<Item> {
    return Observable.of(ITEMS.filter((item) => (item.id === id))[0]).delay(2000);
  }

  getFeaturedItem(): Observable<Item> {
    return Observable.of(ITEMS.filter((item) => item.featured)[0]).delay(2000);
  }

  getItemIds(): Observable<number[]> {
    return Observable.of(ITEMS.map(item => item.id));
  }
}
