import { TestBed } from '@angular/core/testing';

import { DeleteConceptService } from './delete-concept.service';

describe('DeleteConceptService', () => {
  let service: DeleteConceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteConceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
