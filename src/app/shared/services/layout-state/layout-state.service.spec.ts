import { TestBed } from '@angular/core/testing';

import { LayoutStateService } from './layout-state.service';

describe('LayoutStateService', () => {
  let service: LayoutStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
