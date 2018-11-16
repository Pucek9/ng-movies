import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {Movie} from '../../models';
import {MoviesState} from '../../store/movies/movies.state';
import * as paramsActions from '../../store/params/params.actions';
import {moviesCollectionSelector, moviesTotalSelector} from '../../store/movies/movies.reducer';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies$: Observable<Movie>;
  total$: Observable<number>;
  headElements = ['ImdbId', 'Title', 'Year', 'Metascore'];
  sortElements = ['Title', 'Year', 'Metascore'];
  displayedElements = ['imdbId', 'title', 'year', 'metascore'];
  urlId = 'imdbId';

  constructor(
    private store$: Store<MoviesState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
    this.total$ = this.store$.pipe(select(moviesTotalSelector));
  }

}
