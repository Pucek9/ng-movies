import {MovieListState, initializeMovieListState} from './movie-list.state';
import * as MoviesAction from './movie-list.actions';

export type Action = MoviesAction.MovieListActions;

const defaultState: MovieListState = initializeMovieListState();

export function MovieListReducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type) {


    case MoviesAction.SET_LIMIT: {

      return {
        ...state,
        limit: action.payload,
      };

    }

    case MoviesAction.SET_PAGE: {

      return {
        ...state,
        page: action.payload,
      };

    }

    case MoviesAction.SET_SORT_BY: {

      return {
        ...state,
        sortBy: action.payload,
      };

    }

    case MoviesAction.SET_SORT_DIR: {

      return {
        ...state,
        sortDir: action.payload,
      };

    }

    case MoviesAction.GET_MOVIE_LIST: {

      return {
        ...state,
      };

    }

    case MoviesAction.GET_ERROR: {

      return {
        ...state,
      };

    }

  }
}
