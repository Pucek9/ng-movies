import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {Movie} from '../../models';
import {MoviesState} from '../../store/movies/movies.state';
import * as moviesActions from '../../store/movies/movies.actions';
import {moviesCollectionSelector} from '../../store/movies/movies.reducer';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies$: Observable<Movie>;
  headElements = ['ImdbId', 'Title', 'Year', 'Metascore'];
  sortElements = ['Title', 'Year', 'Metascore'];

  constructor(
    private store$: Store<MoviesState>
  ) {
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
  }

  private loadAllMovies() {
    this.store$.dispatch(new moviesActions.GetMovieList()); // TODO: should be initialized by route effect
    this.movies$ = this.store$.pipe(select(moviesCollectionSelector));
  }

}
