import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSizeComponent } from './list-of-size.component';

describe('ListOfSizeComponent', () => {
  let component: ListOfSizeComponent;
  let fixture: ComponentFixture<ListOfSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListOfSizeComponent]
    });
    fixture = TestBed.createComponent(ListOfSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
