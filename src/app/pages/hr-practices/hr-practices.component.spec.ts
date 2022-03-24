import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPracticesComponent } from './hr-practices.component';

describe('HrPracticesComponent', () => {
  let component: HrPracticesComponent;
  let fixture: ComponentFixture<HrPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrPracticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
