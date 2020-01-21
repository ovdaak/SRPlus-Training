import { TestBed } from '@angular/core/testing';

import { CategorypropertiesService } from './categoryproperties.service';

describe('CategorypropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorypropertiesService = TestBed.get(CategorypropertiesService);
    expect(service).toBeTruthy();
  });
});
