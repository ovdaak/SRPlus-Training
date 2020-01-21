import { TestBed } from '@angular/core/testing';

import { ApprouterGuardServiceService } from './approuter-guard-service.service';

describe('ApprouterGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprouterGuardServiceService = TestBed.get(ApprouterGuardServiceService);
    expect(service).toBeTruthy();
  });
});
