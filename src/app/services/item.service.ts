import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';
import { ITEMS } from '../shared/Items';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
  getItem(id: number): Item  {
    return ITEMS.filter((item) => (item.id === id))[0];
  }

  getFeaturedItem(): Item {
    return ITEMS.filter((item) => item.featured)[0];
  }
}
