import {async, TestBed} from '@angular/core/testing';

import {ActorsService} from './actors.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ActorsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient, HttpHandler,
      ],
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: ActorsService = TestBed.get(ActorsService);
    expect(service).toBeTruthy();
  });
});
