import {MovieDetailsState, initializeMovieDetailsState} from './movie-details.state';
import * as MovieDetailsAction from './movie-details.actions';
import {createSelector} from '@ngrx/store';

export type Action = MovieDetailsAction.MovieDetailsActions;

const defaultState: MovieDetailsState = initializeMovieDetailsState();

export function movieDetailsReducer(state = defaultState, action: Action) {

  switch (action.type) {

    case MovieDetailsAction.GET_MOVIE_DETAILS: {

      return state;

    }

    case MovieDetailsAction.GOT_MOVIE_DETAILS: {

      return action.payload;

    }

    case MovieDetailsAction.GOT_ERROR: {

      return state;

    }

    case MovieDetailsAction.CLEAR: {

      return initializeMovieDetailsState();

    }

    default: {
      return state;
    }
  }

}

export const getMovieDetailsState = state => state[0].movieDetails;

export const getMovieDetailsSelector = createSelector(getMovieDetailsState);
