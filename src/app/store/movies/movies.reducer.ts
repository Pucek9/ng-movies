import {createSelector} from '@ngrx/store';

import {MoviesState, initializeMoviesState} from './movies.state';
import * as MoviesAction from './movies.actions';

export type Action = MoviesAction.MoviesActions;

const defaultState: MoviesState = initializeMoviesState();

export function moviesReducer(state = defaultState, action: Action) {

  switch (action.type) {

    case MoviesAction.GET_MOVIE_LIST: {

      return state;

    }

    case MoviesAction.GOT_MOVIE_LIST: {

      return action.payload;

    }

    case MoviesAction.GOT_ERROR: {

      return state;

    }

    default: {
      return state;
    }
  }

}

export const getMoviesState = state => state[0].movies;

export const moviesCollectionSelector = createSelector(getMoviesState, (movies => movies.collection));
export const moviesTotalsSelector = createSelector(getMoviesState, (movies => movies.totals));
