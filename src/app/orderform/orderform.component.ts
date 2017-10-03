import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Order, Slots } from '../shared/order';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;
  slots = Slots;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      mobileNum: [0, Validators.required],
      address: ['', Validators.required],
      landmark: ['', Validators.required],
      slot: ['', Validators.required],
      specialInstrcutions: '',
    });
  }

  onSubmit() {
    this.order = this.orderForm.value;
    console.log(this.order);
    this.orderForm.reset({
      name: '',
      mobileNum: 0,
      address: '',
      landmark: '',
      slot: '',
      specialInstrcutions: '',
    }
);
  }

}
