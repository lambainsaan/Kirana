import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';

import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class ItemService {

  constructor(private restangular: Restangular) { }

  getItems(): Observable<Item[]> {
    return this.restangular.all('items').getList();
  }

  getItem(id: number): Observable<Item> {
    return this.restangular.one('items/', id).get();
  }

  getFeaturedItem(): Observable<Item> {
    return this.restangular.all('items').getList({ featured: true }).map(items => items[0]);
  }

  getItemIds(): Observable<number[]> {
    return this.getItems()
      .map(items => { return items.map(item => item.id)});
  }
}
