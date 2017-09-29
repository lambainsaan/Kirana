import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item'; 
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  items: Item [];
  selectedItem;
  constructor(private itemService: ItemService ) { }
  ngOnInit() {
    this.items = this.itemService.getItems();
  }
  onSelect(item: Item) {
    this.selectedItem = item;
  }
}

