import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})



export class ItemsComponent implements OnInit {

  items: Item[] = [
    {
      name: 'Colgate',
      image: '/assets/images/toothpaste.jpg',
      category: 'daily',
      label: 'Discount',
      price: '60',
      description: 'A great tootpaste made by the company trusted for over years.'
    },
    {
      name: 'Amul Ghee',
      image: '/assets/images/amul-ghee.jpg',
      category: 'grocery',
      label: 'Featured',
      price: '360',
      description: 'Amul Ghee is clarified butter that is conventionally prepared from cow\'s\
       milk.It is good source of power and provides vivacity to human body.'
    },
    {
      name: 'Biseleri',
      image: '/assets/images/bisleri.jpg',
      category: 'beverage',
      label: '',
      price: '20',
      description: 'A quintessential water bottle. Very yumm!?'
    },
    {
      name: 'Amul Masti Dahi',
      image: '/assets/images/dahi.jpg',
      category: 'daily',
      label: 'discount',
      price: '20',
      description: 'A delectable, semi-sweet New York Style\
      Dahi fresh outta Gujrat!'
    },
    {
      name: 'Maggi',
      image: '/assets/images/maggi.jpg',
      category: 'food',
      label: 'offer',
      price: '50',
      description: 'The world famous noodles is here! Grab it before it runs out!'
    },
    {
      name: 'Pears',
      image: '/assets/images/pears.jpg',
      category: 'soap|bath',
      label: '',
      price: '79',
      description: 'The best soap with the essence of cardimon and water.'
    },
    {
      name: 'Pepsi',
      image: '/assets/images/pepsi.png',
      category: 'beverage',
      label: 'offer',
      price: '25',
      description: 'The beverage that everyone have lust for, its yumm and very disirable.'
    },
    {
      name: 'Tomato',
      image: '/assets/images/tomato.jpg',
      category: 'grocery',
      label: 'discount',
      price: '25',
      description: 'Specially chosen tomatos right from farms.'
    },
  ];
  constructor() { }
  ngOnInit() {
  }

}
