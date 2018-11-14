import {Action} from '@ngrx/store';

export const SET_LIMIT = '[Params] SET_LIMIT';
export const SET_PAGE = '[Params] SET_PAGE';
export const SET_SORT_BY = '[Params] SET_SORT_BY';
export const SET_SORT_DIR = '[Params] SET_SORT_DIR';

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

export type ParamsActions = SetLimit | SetPage | SetSortBy | SetSortDir;
