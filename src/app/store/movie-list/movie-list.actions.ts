import {Action} from '@ngrx/store';

export const SET_LIMIT = '[Movies] SET_LIMIT';

export const SET_PAGE = '[Movies] SET_PAGE';

export const SET_SORT_BY = '[Movies] SET_SORT_BY';

export const SET_SORT_DIR = '[Movies] SET_SORT_DIR';

export const GET_MOVIE_LIST = '[Movies] GET_MOVIE_LIST';

export const GOT_MOVIE_LIST = '[Movies] GOT_MOVIE_LIST';

export const GET_ERROR = '[Movies] GET_ERROR';


export class SetLimit implements Action {
  readonly type = SET_LIMIT;

  constructor(public payload: number) {
  }

}

export class SetPage implements Action {
  readonly type = SET_PAGE;

  constructor(public payload: number) {
  }

}

export class SetSortBy implements Action {
  readonly type = SET_SORT_BY;

  constructor(public payload: string) {
  }

}

export class SetSortDir implements Action {
  readonly type = SET_SORT_DIR;

  constructor(public payload: number) {
  }

}

export class GetMovieList implements Action {
  readonly type = GET_MOVIE_LIST;
  constructor() {
  }

}

export class GotMovieList implements Action {
  readonly type = GOT_MOVIE_LIST;
  constructor(public payload: any) {
  }

}

export class GetError implements Action {
  readonly type = GET_ERROR;
  constructor() {
  }

}

export type MovieListActions = SetLimit | SetPage | SetSortBy | SetSortDir | GetMovieList| GotMovieList | GetError;
