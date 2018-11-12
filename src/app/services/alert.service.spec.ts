import {async, TestBed} from '@angular/core/testing';
import {AlertService} from './alert.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

describe('AlertService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: {events: of()}},
      ],
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
