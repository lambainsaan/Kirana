import { Component, OnInit, Inject } from '@angular/core';

import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { baseURL } from '../shared/baseurl';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Item;
  promotion: Promotion;
  cols: Observable<number>;
  categories = [
    {
      "name": "Fruits & Vegetables",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_9_v_3_500_1508730512.jpg?v=1",
      "description": "Fruit & Vegetable Baskets, Fruits, Vegetables, Cut Fresh, Sprouts & Herbs, Fresh Snacks",
      "redirect": ""
    },
    {
      "name": "Beverages",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_12_v_3_500_1508730522.jpg?v=1",
      "description": "Beverages Best Offers, Soft Drinks, Juices & Concentrates, Tea & Coffee, Health & Energy",
      "redirect": ""
    },
    {
      "name": "Household Needs",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_18_v_3_500_1508730666.jpg?v=1",
      "description": "Household Best Offers, Laundry Detergents, Dishwashers, Cleaners, Cleaning Tools &amp",
      "redirect": ""
    },
    {
      "name": "Breakfast & Dairy",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_14_v_3_500_1508730585.jpg?v=1",
      "description": "Breakfast & Dairy Best Offers, Milk & Milk Products, Bread & Eggs, Paneer & Curd, Butter",
      "redirect": ""
    },
    {
      "name": "Noodles, Pasta & Instant Food",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_15_v_3_500_1508730633.jpg?v=1",
      "description": "Noodles & Pasta Best Offers, Noodles & Vermicelli, Pasta & Soups, Ready Made Meals",
      "redirect": ""
    },
    {
      "name": "Baby & Kids",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_7_v_3_500_1508730478.jpg?v=1",
      "description": "Baby Food, Diapers & Wipes, Baby Skin & Hair Care, Baby Accessories & More",
      "redirect": ""
    },
    {
      "name": "Pet Care",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_5_v_3_500_1508730457.jpg?v=1",
      "description": "Dog Supplies, Cat Supplies",
      "redirect": ""
    },
    {
      "name": "Grocery & Staples",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_16_v_3_500_1508730372.jpg?v=1",
      "description": "Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee &",
      "redirect": ""
    }, {
      "name": "Home & Kitchen",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_1047_v_3_500_1508730807.jpg?v=1",
      "description": "Home & Kitchen Best Offers, Plasticware, Cookware, Kitchen Tools & Accessories, Home",
      "redirect": ""
    }, {
      "name": "Personal Care",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_163_v_3_500_1508730685.jpg?v=1",
      "description": "Personal Care Best Offers, Bath & Body, Hair Care, Skin Care, Oral Care, Deos & Perfumes,",
      "redirect": ""
    }, {
      "name": "Biscuits, Snacks & Chocolates",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_13_v_3_500_1508730565.jpg?v=1",
      "description": "Biscuits & Chocolates Offers, Biscuits & Cookies, Namkeen & Snacks, Chips & Crisps,",
      "redirect": ""
    }, {
      "name": "Sauces, Jams & Condiments",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_972_v_3_500_1508730787.jpg?v=1",
      "description": "Sauces & Jams Best Offers, Sauces & Ketchups, Jams & Spreads, Mouth Fresheners",
      "redirect": ""
    }, {
      "name": "Organic & Gourmet",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_650_v_3_500_1508730736.jpg?v=1",
      "description": "Chocolates & Snacks, Beverages, Processed Food, Jams & Spreads, Breakfast & Dairy,",
      "redirect": ""
    }, {
      "name": "Meats & Seafood",
      "url": "//webcdn.grofers.com/cdn/category/icon/icon_cat_4_v_3_500_1507787971.jpg?v=1",
      "description": "Chicken, Frozen & Chilled Food, Meat Spices, Red Meat, Seafood",
      "redirect": ""
    },
  ];
  constructor(private itemservice: ItemService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') private baseURL,
    private observableMedia: ObservableMedia) { 
    }


  ngOnInit() {
    const grid = new Map([
      ["xs", 1],
      ["sm", 1],
      ["md", 2],
      ["lg", 3],
      ["xl", 3]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      })
      .startWith(start);
    this.itemservice.getFeaturedItem().subscribe(item => this.item = item);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  }
}



