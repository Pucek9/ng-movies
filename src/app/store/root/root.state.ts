import {initializeParamsState, ParamsState} from '../params/params.state';
import {initializeMoviesState, MoviesState} from '../movies/movies.state';

export interface RootState {
  params: ParamsState;
  movies: MoviesState;
}

export function initializeRootState() {
  return {
    params: initializeParamsState(),
    movies: initializeMoviesState()
  };
}

