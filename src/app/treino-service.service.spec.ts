import { TestBed } from '@angular/core/testing';

import { TreinoServiceService } from './treino-service.service';

describe('TreinoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinoServiceService = TestBed.get(TreinoServiceService);
    expect(service).toBeTruthy();
  });
});
