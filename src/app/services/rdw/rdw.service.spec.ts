import { TestBed } from '@angular/core/testing';

import { RdwService } from './rdw.service';

describe('RdwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RdwService = TestBed.get(RdwService);
    expect(service).toBeTruthy();
  });
});
