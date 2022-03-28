import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevPopupComponent } from './prev-popup.component';

describe('PrevPopupComponent', () => {
  let component: PrevPopupComponent;
  let fixture: ComponentFixture<PrevPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
