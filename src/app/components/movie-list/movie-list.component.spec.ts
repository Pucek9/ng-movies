import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MoviesService} from '../../services';
import {of} from 'rxjs';
import {DataGridComponent} from '../data-grid/data-grid.component';
import {Store} from '@ngrx/store';
import {initializeRootState} from '../../store/root/root.state';
import {MockStore} from '../../store/mock.store';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieListComponent, DataGridComponent],
      providers: [
        {provide: MoviesService, useValue: {getAll : () => of([])}},
        {provide: Store, useValue: new MockStore(initializeRootState())},
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
