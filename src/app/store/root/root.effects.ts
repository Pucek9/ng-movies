import {Injectable} from '@angular/core';
import {catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {MoviesService} from '../../services';
import * as moviesActions from '../movies/movies.actions';
import * as paramsActions from '../params/params.actions';
import {ParamsState} from '../params/params.state';
import {paramsSelector} from '../params/params.reducer';
import {MoviesState} from '../movies/movies.state';

const allowedTypesForGetMovieList = [
  moviesActions.GET_MOVIE_LIST,
  paramsActions.SET_PAGE,
  paramsActions.SET_SORT_DIR,
  paramsActions.SET_SORT_BY,
  paramsActions.SET_LIMIT,
];

@Injectable()
export class RootEffects {

  $params: Observable<ParamsState> = this.store$.pipe(select(paramsSelector));

  constructor(
    private movieListService: MoviesService,
    private store$: Store<ParamsState>,
    private actions$: Actions,
  ) {
  }

  @Effect()
  getMovieList: Observable<Action> = this.actions$.pipe(
    ofType(...allowedTypesForGetMovieList),
    withLatestFrom(this.$params),
    switchMap(([action, params]: [Action, ParamsState]) => {
      console.log('effect', action, params);
        localStorage.setItem('params', JSON.stringify(params));
        return this.movieListService.getAll(params).pipe(
          map((data: MoviesState) => new moviesActions.GotMovieList(data)),
          catchError((error) => of(new moviesActions.GotError(error)))
        );
      }
    )
  );

}
