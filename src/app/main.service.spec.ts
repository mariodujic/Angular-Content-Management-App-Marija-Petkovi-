import { TestBed } from '@angular/core/testing';

import { MainService } from './main/main.service';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });
});