import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TypeService } from './type.service';

describe('TypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeService]
    });
  });

  /*it('should be created', inject([TypeService], (service: TypeService) => {
    //expect(service).toBeTruthy();
  }));*/
});
