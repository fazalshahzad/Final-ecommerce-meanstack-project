import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSuccessfullComponent } from './purchase-successfull.component';

describe('PurchaseSuccessfullComponent', () => {
  let component: PurchaseSuccessfullComponent;
  let fixture: ComponentFixture<PurchaseSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
