import { Component, OnInit } from '@angular/core';

import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;
  promotion: Promotion;

  constructor(private itemservice: ItemService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.itemservice.getFeaturedItem().then(item => this.item = item);
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
