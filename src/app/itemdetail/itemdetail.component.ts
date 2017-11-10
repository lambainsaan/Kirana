import { Component, OnInit, Inject } from '@angular/core';

import { ItemService } from '../services/item.service';

import { Item } from '../shared/item';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { baseURL } from '../shared/baseurl';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),
      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class ItemdetailComponent implements OnInit {

  item: Item;
  itemIds: number[] ;
  prev: number;
  next: number;
  errMess: String;
  visibility = 'shown';

  constructor(private itemservice: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.itemservice.getItemIds()
      .subscribe(itemIds => this.itemIds = itemIds,
      errmess => this.errMess = <any>errmess);

    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.itemservice.getItem(+params['id']) })
      .subscribe(item => { this.item = item; this.setPrevNext(item.id); this.visibility = 'shown'; });
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
