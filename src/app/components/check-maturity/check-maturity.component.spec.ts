import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMaturityComponent } from './check-maturity.component';

describe('CheckMaturityComponent', () => {
  let component: CheckMaturityComponent;
  let fixture: ComponentFixture<CheckMaturityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMaturityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMaturityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
