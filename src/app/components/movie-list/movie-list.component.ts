import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {MoviesState} from '../../store/movies/movies.state';
import * as paramsActions from '../../store/params/params.actions';
import {moviesCollectionSelector, moviesTotalSelector} from '../../store/movies/movies.selectors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies$: Observable<MoviesState>;
  total$: Observable<number>;
  headElements = ['ImdbId', 'Title', 'Year', 'Metascore'];
  typeElements = ['string', 'string', 'number', 'number'];
  sortElements = ['Title', 'Year', 'Metascore'];
  displayedElements = ['imdbId', 'title', 'year', 'metascore'];
  route = '/movie/';
  urlId = 'imdbId';

  constructor(
    private store$: Store<MoviesState>,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.loadAllMovies();
    this.activatedRoute.params.subscribe(params => {
      this.store$.dispatch(new paramsActions.SetPage(parseInt(params.nr, 0)));
    });
  }

  ngOnDestroy() {
  }

  private loadAllMovies() {
    this.movies$ = this.store$.pipe(select(moviesCollectionSelector));
  }

}
