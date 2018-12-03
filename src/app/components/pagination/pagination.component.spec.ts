import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';
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
  let mockStore;

  beforeEach(async(() => {
    mockStore = new MockStore();
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PaginationComponent],
      providers: [
        {provide: Store, useValue: mockStore},
        {provide: Router, useValue: RouterTestingModule},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    // component.params$ = of(initializeParamsState());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
