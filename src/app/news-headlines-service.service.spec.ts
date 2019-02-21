import { TestBed } from '@angular/core/testing';

import { NewsHeadlinesServiceService } from './news-headlines-service.service';

describe('NewsHeadlinesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsHeadlinesServiceService = TestBed.get(NewsHeadlinesServiceService);
    expect(service).toBeTruthy();
  });
});
