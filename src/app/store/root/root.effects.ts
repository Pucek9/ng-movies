import {Injectable} from '@angular/core';
import {catchError, filter, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {AuthenticationService, MoviesService} from '../../services';
import * as moviesActions from '../movies/movies.actions';
import * as paramsActions from '../params/params.actions';
import * as movieDetailsActions from '../movie-details/movie-details.actions';
import {ParamsState} from '../params/params.state';
import {paramsSelector} from '../params/params.reducer';
import {MoviesState} from '../movies/movies.state';
import {User} from '../../models';
import {MovieDetailsState} from '../movie-details/movie-details.state';

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
    private authenticationService: AuthenticationService,
    private store$: Store<ParamsState>,
    private actions$: Actions,
  ) {
  }


  @Effect()
  getMovie: Observable<Action> = this.actions$.pipe(
    ofType('ROUTER_NAVIGATION'),
    filter((action: Action) => {
      return action.payload.event.urlAfterRedirects.startsWith('/details/');
    }),
    withLatestFrom(this.authenticationService.currentUser),
    switchMap(([action, user]: [Action, User]) => {
        const imdbId = action.payload.event.urlAfterRedirects.split('/')[2];
        return this.movieListService.getById(imdbId, user).pipe(
          map((data: MovieDetailsState) => new movieDetailsActions.GotMovieDetails(data)),
          catchError((error) => of(new movieDetailsActions.GotError(error)))
        );
      }
    )
  );

  @Effect()
  getMovieList: Observable<Action> = this.actions$.pipe(
    ofType(...allowedTypesForGetMovieList),
    withLatestFrom(this.$params, this.authenticationService.currentUser),
    switchMap(([action, params, user]: [Action, ParamsState, User]) => {
        localStorage.setItem('params', JSON.stringify(params));
        return this.movieListService.getAll(params, user).pipe(
          map((data: MoviesState) => new moviesActions.GotMovieList(data)),
          catchError((error) => of(new moviesActions.GotError(error)))
        );
      }
    )
  );

}
