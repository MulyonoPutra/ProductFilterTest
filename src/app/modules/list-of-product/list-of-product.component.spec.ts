import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProductComponent } from './list-of-product.component';

describe('ListOfProductComponent', () => {
  let component: ListOfProductComponent;
  let fixture: ComponentFixture<ListOfProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfProductComponent]
    });
    fixture = TestBed.createComponent(ListOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
