import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {LoginComponent} from './login.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {AlertService} from '../../services';
import {of} from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const fakeActivatedRoute = {
    snapshot: {queryParams: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {provide: Router, useValue: RouterTestingModule},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: AlertService, useValue: of()},
        HttpClient, HttpHandler,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
