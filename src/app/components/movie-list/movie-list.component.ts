import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Movie} from '../../models/index';
import {MovieListState} from '../../store/movie-list/movie-list.state';
import * as fromAction from '../../store/movie-list/movie-list.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies: { collection: Movie[], totals: number } = {collection: [], totals: 0};
  headElements = ['ImdbId', 'Title', 'Year', 'Metascore'];
  order = true;

  constructor(
    private store: Store<MovieListState>
  ) {
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
  }

  private loadAllMovies() {
    this.store.dispatch(new fromAction.GetMovieList());
    this.store.pipe(select(state => state[0])).subscribe(state => {
      this.movies = state && state.movies;
    });
  }

  public changeSortDir() {
    this.order = !this.order;
    this.store.dispatch(new fromAction.SetSortDir(this.order ? 1 : -1));
  }
}
