import { Component, OnInit } from '@angular/core';

import { ItemService } from '../services/item.service';

import { Item } from '../shared/item';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  item: Item;
  itemIds: number[];
  prev: number;
  next: number;

  constructor(private itemservice: ItemService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.itemservice.getItemIds().subscribe(itemIds => this.itemIds = itemIds);
    this.route.params
      .switchMap((params: Params) => this.itemservice.getItem(+params['id']))
      .subscribe(item => { this.item = item; this.setPrevNext(item.id); });
    }

  setPrevNext(itemId: number) {
    const index = this.itemIds.indexOf(itemId);
    this.prev = this.itemIds[(this.itemIds.length + index - 1) % this.itemIds.length];
    this.next = this.itemIds[(this.itemIds.length + index + 1) % this.itemIds.length];
  }

  goBack(): void {
    this.location.back();
  }


}
