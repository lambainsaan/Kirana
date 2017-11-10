import { Component, OnInit, Inject } from '@angular/core';

import { CartService } from '../services/cart.service';
import { baseURL } from '../shared/baseurl';
import { CartItem } from '../shared/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  errMess = null;

  constructor(private cartService: CartService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.cartService.getCartItems()
      .subscribe(items => this.items = items,
      errmess => this.errMess = <any>errmess);
  }

}
