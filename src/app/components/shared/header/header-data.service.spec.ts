/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderDataService } from './header-data.service';

describe('Service: HeaderData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderDataService]
    });
  });

  it('should ...', inject([HeaderDataService], (service: HeaderDataService) => {
    expect(service).toBeTruthy();
  }));
});
