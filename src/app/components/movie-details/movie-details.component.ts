import {Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as movieDetailsActions from '../../store/movie-details/movie-details.actions';
import {MoviesState} from '../../store/movies/movies.state';
import {getMovieDetailsSelector} from '../../store/movie-details/movie-details.reducer';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnDestroy {

  public details$ = this.store$.pipe(select(getMovieDetailsSelector));

  constructor(
    private store$: Store<MoviesState>,
  ) {
  }

  ngOnDestroy() {
    this.store$.dispatch(new movieDetailsActions.Clear());
  }

}
