import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Order, Slots } from '../shared/order';
import { OrderService } from '../services/order.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.scss']
})
export class OrderformComponent implements OnInit {

  orderForm: FormGroup;
  order: Order;
  orders: Order[];
  ordersCopy = null;
  slots = Slots;
  formErrors = {
    'name': '',
    'mobileNum': '',
    'address': '',
    'landmark': '',
    'slot': ''
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 50 characters long.'
    },
    'mobileNum': {
      'required': 'Mobile number is required.',
      'pattern': 'Mobile number must contain only numbers.'
    },
    'address': {
      'required': 'Address is required.',
      'minlength': 'Address must be at least 2 characters long.'
    },
    'landmark': {
      'required': 'Landmark is required.',
      'minlength': 'Landmark must be at least 2 characters long.'
    },
    'slot': {
      'required': 'Slot is required.'
    }
  };

  constructor(private fb: FormBuilder,
    private orderService: OrderService,
    private restangular: Restangular) {
    this.createForm();
    this.orderService.getOrders().subscribe(orders => { this.orders = orders; this.ordersCopy = orders; });
  }

  ngOnInit() {
  }

  createForm() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobileNum: [0, [Validators.required, Validators.pattern('[0-9]*')]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      landmark: ['', [Validators.required, Validators.minLength(3)]],
      slot: ['', Validators.required],
      specialInstrcutions: '',
    });
    this.orderForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.orderForm) { return; }
    const form = this.orderForm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


  onSubmit() {
    this.order = this.orderForm.value;
    this.ordersCopy.post(this.orderForm.value).subscribe(orders => this.orders = this.orders);
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
