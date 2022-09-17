import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionplanComponent } from './pensionplan.component';

describe('PensionplanComponent', () => {
  let component: PensionplanComponent;
  let fixture: ComponentFixture<PensionplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
