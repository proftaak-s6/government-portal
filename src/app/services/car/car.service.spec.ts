import { TestBed } from '@angular/core/testing';

import { InMemoryCarService } from './car.service';

describe('CarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCarService = TestBed.get(InMemoryCarService);
    expect(service).toBeTruthy();
  });
});
