import { TestBed } from '@angular/core/testing';

import { EntrrepotsService } from './entrrepots.service';

describe('EntrrepotsService', () => {
  let service: EntrrepotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrrepotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
