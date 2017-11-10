import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../shared/cartItem';

@Injectable()
export class CartService {

  constructor(private restangular: Restangular) { }

  getCartItems() : Observable<CartItem[]> {
    return this.restangular.all('cartItems').getList();
  }

}
