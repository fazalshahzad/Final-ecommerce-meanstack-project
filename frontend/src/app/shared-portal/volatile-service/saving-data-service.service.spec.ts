import { TestBed } from '@angular/core/testing';

import { SavingDataServiceService } from './saving-data-service.service';

describe('SavingDataServiceService', () => {
  let service: SavingDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
