import { TestBed } from '@angular/core/testing';

import { RpsApiServiceService } from './rps-api-service.service';

describe('RpsApiServiceService', () => {
  let service: RpsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
