import {async, TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AuthenticationService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient, HttpHandler,
      ],
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
