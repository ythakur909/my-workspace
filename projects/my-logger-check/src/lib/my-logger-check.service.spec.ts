import { TestBed } from '@angular/core/testing';

import { MyLoggerCheckService } from './my-logger-check.service';

describe('MyLoggerCheckService', () => {
  let service: MyLoggerCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLoggerCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
