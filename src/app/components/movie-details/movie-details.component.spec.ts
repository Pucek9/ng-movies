import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsComponent} from './movie-details.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {of} from 'rxjs';
import {BackButtonComponent} from '../back-button';
import {MdbCardBodyComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbIconComponent} from 'angular-bootstrap-md';
import {RouterTestingModule} from '@angular/router/testing';
import {Store} from '@ngrx/store';
import {MockStore} from '../../store/mock.store';
import {initializeRootState} from '../../store/root/root.state';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  const fakeActivatedRoute = {
    ...new ActivatedRoute(),
    params: of({imdbId: 'test'})
  } as ActivatedRoute;
  let mockStore;
  beforeEach(async(() => {
    mockStore = new MockStore();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieDetailsComponent, BackButtonComponent, MdbCardTitleComponent, MdbCardBodyComponent, MdbCardTextComponent,
        MdbIconComponent],
      providers: [
        {provide: Store, useValue: mockStore},
        HttpClient, HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
