import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
}

