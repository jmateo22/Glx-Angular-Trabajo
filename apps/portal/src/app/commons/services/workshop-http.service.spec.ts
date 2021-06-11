import { TestBed } from '@angular/core/testing';

import { WorkshopHttpService } from './workshop-http.service';

describe('WorkshopHttpService', () => {
  let service: WorkshopHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
