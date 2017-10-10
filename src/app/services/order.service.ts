import { Injectable } from '@angular/core';

import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Order } from '../shared/order'
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getOrders(): Observable<Order[]> {
    return this.restangular.all('orders').getList();
  }

}
