import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBlockComponent } from './product-block.component';

describe('ProductBlockComponent', () => {
  let component: ProductBlockComponent;
  let fixture: ComponentFixture<ProductBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
