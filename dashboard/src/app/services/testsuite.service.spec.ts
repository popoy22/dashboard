import { TestBed } from '@angular/core/testing';

import { TestsuiteService } from './testsuite.service';

describe('TestsuiteService', () => {
  let service: TestsuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
