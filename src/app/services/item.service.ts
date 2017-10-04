import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';
import { ITEMS } from '../shared/Items';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }
  getItem(id: number): Promise<Item> {
    return Promise.resolve(ITEMS.filter((item) => (item.id === id))[0]);
  }

  getFeaturedItem(): Promise<Item> {
    return Promise.resolve(ITEMS.filter((item) => item.featured)[0]);
  }
}
