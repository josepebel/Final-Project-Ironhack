import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLaptopsComponent } from './cart-laptops.component';

describe('CartLaptopsComponent', () => {
  let component: CartLaptopsComponent;
  let fixture: ComponentFixture<CartLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
