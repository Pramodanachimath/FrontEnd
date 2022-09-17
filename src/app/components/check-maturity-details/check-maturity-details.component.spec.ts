import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMaturityDetailsComponent } from './check-maturity-details.component';

describe('CheckMaturityDetailsComponent', () => {
  let component: CheckMaturityDetailsComponent;
  let fixture: ComponentFixture<CheckMaturityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMaturityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMaturityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
