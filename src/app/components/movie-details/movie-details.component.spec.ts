import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsComponent} from './movie-details.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MoviesService} from '../../services/index';
import {of} from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  const fakeActivatedRoute = {
    ...new ActivatedRoute(),
    params: of({imdbId: 'test'})
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: MoviesService, useValue: {getById: () => of({})}},
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
