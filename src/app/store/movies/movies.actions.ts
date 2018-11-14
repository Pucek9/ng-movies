import {Action} from '@ngrx/store';
import {MoviesState} from './movies.state';

export const GET_MOVIE_LIST = '[Movies] GET_MOVIE_LIST';
export const GOT_MOVIE_LIST = '[Movies] GOT_MOVIE_LIST';
export const GOT_ERROR = '[Movies] GOT_ERROR';

export class GetMovieList implements Action {
  readonly type = GET_MOVIE_LIST;
  constructor() {
  }

}

export class GotMovieList implements Action {
  readonly type = GOT_MOVIE_LIST;
  constructor(public payload: MoviesState) {
  }

}

export class GotError implements Action {
  readonly type = GOT_ERROR;
  constructor() {
  }

}

export type MoviesActions = GetMovieList| GotMovieList | GotError;
