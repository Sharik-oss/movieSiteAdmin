import { TestBed } from '@angular/core/testing';

import { MovieUpdateService } from './movie-update.service';

describe('MovieUpdateService', () => {
  let service: MovieUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
