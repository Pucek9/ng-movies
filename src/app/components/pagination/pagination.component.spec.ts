import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import {FormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {MockStore} from '../../store/mock.store';
import {initializeRootState} from '../../store/root/root.state';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {initializeParamsState} from '../../store/params/params.state';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PaginationComponent ],
      providers: [
        {provide: Store, useValue: new MockStore(initializeRootState())},
        {provide: Router, useValue: RouterTestingModule},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.total$ = of(1);
    component.params$ = of(initializeParamsState());
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
