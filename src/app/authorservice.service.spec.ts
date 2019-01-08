import { TestBed } from '@angular/core/testing';

import { AuthorserviceService } from './authorservice.service';

describe('AuthorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorserviceService = TestBed.get(AuthorserviceService);
    expect(service).toBeTruthy();
  });
});
