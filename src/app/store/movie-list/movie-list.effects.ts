import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
// import {Action} from './movie-list.reducer';
import {MoviesService} from '../../services';
import * as fromAction from './movie-list.actions';
import {Movie} from '../../models';

@Injectable()
export class MovieListEffects {

  constructor(
    private movieListService: MoviesService,
    private actions$: Actions,
  ) {
  }

  @Effect()
  getMovieList: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SET_PAGE, fromAction.SET_SORT_DIR, fromAction.SET_SORT_BY, fromAction.SET_LIMIT, fromAction.GET_MOVIE_LIST),
    mergeMap((action) => {
      console.log('effect', action);
      return this.movieListService.getAll().pipe(
        map((data) => new fromAction.GotMovieList(data)),
        catchError(() => of(new fromAction.GetError()))
      );
    }));

}
