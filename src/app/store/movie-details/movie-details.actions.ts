import {Action} from '@ngrx/store';
import {MovieDetailsState} from './movie-details.state';

export const GET_MOVIE_DETAILS = '[Movie] GET_MOVIE_DETAILS';
export const GOT_MOVIE_DETAILS = '[Movie] GOT_MOVIE_DETAILS';
export const GOT_ERROR = '[Movie] GOT_ERROR';
export const CLEAR = '[Movie] CLEAR';


export class GetMovieDetails implements Action {
  readonly type = GET_MOVIE_DETAILS;

  constructor(public payload: any = null) {
  }

}

export class GotMovieDetails implements Action {
  readonly type = GOT_MOVIE_DETAILS;

  constructor(public payload: MovieDetailsState) {
  }

}

export class GotError implements Action {
  readonly type = GOT_ERROR;

  constructor(public payload: Error) {
  }

}

export class Clear implements Action {
  readonly type = CLEAR;

  constructor(public payload: any = null) {
  }

}

export type MovieDetailsAction = GetMovieDetails | GotMovieDetails | GotError | Clear;
