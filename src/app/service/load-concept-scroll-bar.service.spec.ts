import { TestBed } from '@angular/core/testing';

import { LoadConceptScrollBarService } from './load-concept-scroll-bar.service';

describe('LoadConceptScrollBarService', () => {
  let service: LoadConceptScrollBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadConceptScrollBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
