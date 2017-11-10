import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemdetailComponent } from './cartitemdetail.component';

describe('CartitemdetailComponent', () => {
  let component: CartitemdetailComponent;
  let fixture: ComponentFixture<CartitemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartitemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartitemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
