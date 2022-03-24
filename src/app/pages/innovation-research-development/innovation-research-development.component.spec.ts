import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationResearchDevelopmentComponent } from './innovation-research-development.component';

describe('InnovationResearchDevelopmentComponent', () => {
  let component: InnovationResearchDevelopmentComponent;
  let fixture: ComponentFixture<InnovationResearchDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationResearchDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationResearchDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
