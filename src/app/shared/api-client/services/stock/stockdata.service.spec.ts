import { TestBed } from '@angular/core/testing';

import { StockDataService } from './stockdata.service';

describe('StockDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockDataService = TestBed.get(StockDataService);
    expect(service).toBeTruthy();
  });
});
