import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: RouterTestingModule},
        AuthGuard, HttpClient, HttpHandler,
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
