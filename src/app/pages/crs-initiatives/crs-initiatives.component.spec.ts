import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsInitiativesComponent } from './crs-initiatives.component';

describe('CrsInitiativesComponent', () => {
  let component: CrsInitiativesComponent;
  let fixture: ComponentFixture<CrsInitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrsInitiativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrsInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
