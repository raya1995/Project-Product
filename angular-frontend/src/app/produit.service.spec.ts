import { TestBed } from '@angular/core/testing';

import { ProduitService } from './employee.service';

describe('EmployeeService', () => {
  let service: ProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
