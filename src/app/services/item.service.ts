import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable()
export class ItemService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getItems(): Observable<Item[]> {
    return this.http.get(baseURL + 'items').map(res => this.processHTTPMsgService.extractData(res));
  }

  getItem(id: number): Observable<Item> {
    return this.http.get(baseURL + 'items/' + id)
      .map(res => this.processHTTPMsgService.extractData(res));
  }

  getFeaturedItem(): Observable<Item> {
    return this.http.get(baseURL + 'items?featured=true')
      .map(res => this.processHTTPMsgService.extractData(res)[0]);
  }

  getItemIds(): Observable<number[]> {
    return this.getItems()
    .map(items => items.map(item => item.id));
  }
}
