import {async, TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

describe('MoviesService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthenticationService, useValue: {currentUserValue: {}}},
        HttpClient, HttpHandler,
      ],
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
