import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInvestmentComponent } from './delete-investment.component';

describe('DeleteInvestmentComponent', () => {
  let component: DeleteInvestmentComponent;
  let fixture: ComponentFixture<DeleteInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
