import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item'; 
import { ITEMS } from '../shared/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})


export class ItemsComponent implements OnInit {
  items = ITEMS;
  selectedItem;
  constructor() { }
  ngOnInit() {
  }
  onSelect(item: Item){
    this.selectedItem = item;
  }
}

