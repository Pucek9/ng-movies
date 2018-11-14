import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {first} from 'rxjs/operators';

import {Movie} from '../../../models';
import {MoviesService} from '../../../services';
import {MovieListState} from '../../../store/movie-list/movie-list.state';
import * as fromAction from '../../../store/movie-list/movie-list.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  order = true;

  constructor(
    private moviesService: MoviesService,
    private store: Store<MovieListState>
  ) {
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
  }

  private loadAllMovies() {
    this.moviesService.getAll().pipe(first()).subscribe((movies: object) => {
      // @ts-ignore
      this.movies = movies.collection;
    });
  }

  public changeSortDir() {
    this.order = !this.order;
    this.store.dispatch(new fromAction.SetSortDir(this.order? 1 : -1));
  }
}
