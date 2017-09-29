import { Injectable } from '@angular/core';
import { Item } from '../shared/Item';
import { ITEMS } from '../shared/Items';

@Injectable()
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return ITEMS;
  }
}
