import { Component, OnInit, Inject } from '@angular/core';

import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { baseURL } from '../shared/baseurl';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;
  promotion: Promotion;

  constructor(private itemservice: ItemService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') private baseURL) { }


  ngOnInit() {
    this.itemservice.getFeaturedItem().subscribe(item => this.item = item);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  }

}
