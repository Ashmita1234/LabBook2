import { TestBed } from '@angular/core/testing';

import { BasicPhoneServiceService } from './basic-phone-service.service';

describe('BasicPhoneServiceService', () => {
  let service: BasicPhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
