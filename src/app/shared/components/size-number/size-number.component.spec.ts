import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeNumberComponent } from './size-number.component';

describe('SizeNumberComponent', () => {
  let component: SizeNumberComponent;
  let fixture: ComponentFixture<SizeNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SizeNumberComponent]
    });
    fixture = TestBed.createComponent(SizeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
