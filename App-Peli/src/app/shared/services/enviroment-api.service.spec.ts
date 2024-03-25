import { TestBed } from '@angular/core/testing';

import { EnviromentApiService } from './enviroment-api.service';

describe('EnviromentApiService', () => {
  let service: EnviromentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
