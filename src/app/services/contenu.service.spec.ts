import { TestBed } from '@angular/core/testing';

import { ContenuService } from './contenu.service';

describe('ContenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContenuService = TestBed.get(ContenuService);
    expect(service).toBeTruthy();
  });
});
