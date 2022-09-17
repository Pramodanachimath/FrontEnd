import { TestBed } from '@angular/core/testing';

import { CheckmaturityService } from './checkmaturity.service';

describe('CheckmaturityService', () => {
  let service: CheckmaturityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckmaturityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
