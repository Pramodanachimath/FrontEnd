import { TestBed } from '@angular/core/testing';

import { PensionplanService } from './pensionplan.service';

describe('PensionplanService', () => {
  let service: PensionplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
