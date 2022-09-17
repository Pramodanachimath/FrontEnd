import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionplanDetailsComponent } from './pensionplan-details.component';

describe('PensionplanDetailsComponent', () => {
  let component: PensionplanDetailsComponent;
  let fixture: ComponentFixture<PensionplanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionplanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionplanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
