import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieListComponent} from './movie-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {MoviesService} from '../../services';
import {of} from 'rxjs';
import {DataGridComponent} from '../data-grid';
import {Store} from '@ngrx/store';
import {initializeRootState} from '../../store/root/root.state';
import {MockStore} from '../../store/mock.store';
import {PaginationComponent} from '../pagination';
import {MdbIconComponent} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let mockStore;

  beforeEach(async(() => {
    mockStore = new MockStore();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [MovieListComponent, DataGridComponent, PaginationComponent, MdbIconComponent],
      providers: [
        {provide: MoviesService, useValue: {getAll: () => of([])}},
        {provide: Store, useValue: mockStore},
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
