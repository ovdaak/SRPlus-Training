import { TestBed } from '@angular/core/testing';

import { GlobalstateService } from './globalstate.service';

describe('GlobalstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalstateService = TestBed.get(GlobalstateService);
    expect(service).toBeTruthy();
  });
});
