import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Component, OnInit, Inject } from '@angular/core';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  items: Item[];
  errMess: string;
  constructor(private itemService: ItemService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => this.items = items,
        errmess => this.errMess = <any>errmess);
  }
}

