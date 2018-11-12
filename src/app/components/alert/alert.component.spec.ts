import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertService} from '../../services';
import {of} from 'rxjs';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      providers: [
        {provide: Router, useValue: RouterTestingModule},
        {provide: AlertService, useValue: {getMessage: () => of('Message')}},

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
