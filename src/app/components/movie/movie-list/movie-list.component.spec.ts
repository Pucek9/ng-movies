import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {MovieListItemComponent} from '../movie-list-item';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MoviesService} from '../../../services';
import {of} from 'rxjs';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieListComponent, MovieListItemComponent],
      providers: [
        {provide: MoviesService, useValue: {getAll : () => of([])}},
        HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
