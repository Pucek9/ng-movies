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
        params: {
          ...state.params,
          limit: action.payload
        },
      };

    }

    case MoviesAction.SET_PAGE: {

      return {
        ...state,
        params: {
          ...state.params,
          page: action.payload
        },
      };

    }

    case MoviesAction.SET_SORT_BY: {

      return {
        ...state,
        params: {
          ...state.params,
          sortBy: action.payload
        },
      };

    }

    case MoviesAction.SET_SORT_DIR: {

      return {
        ...state,
        params: {
          ...state.params,
          sortDir: action.payload
        },
      };

    }

    case MoviesAction.GOT_MOVIE_LIST: {

      return {
        ...state,
        movies: action.payload
      };

    }

    case MoviesAction.GET_ERROR: {

      return {
        ...state,
      };

    }

  }
}
