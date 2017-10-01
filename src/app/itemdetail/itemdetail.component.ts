import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service';

import { Item } from '../shared/item';
import { ITEMS } from '../shared/items';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  item: Item;

  constructor(private itemservice: ItemService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.item = this.itemservice.getItem(id);
  }

  goBack(): void {
    this.location.back();
  }


}
