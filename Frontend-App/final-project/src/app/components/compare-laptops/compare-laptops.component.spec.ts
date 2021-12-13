import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareLaptopsComponent } from './compare-laptops.component';

describe('CompareLaptopsComponent', () => {
  let component: CompareLaptopsComponent;
  let fixture: ComponentFixture<CompareLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareLaptopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
