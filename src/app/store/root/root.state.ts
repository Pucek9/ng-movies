import {initializeParamsState, ParamsState} from '../params/params.state';
import {initializeMoviesState, MoviesState} from '../movies/movies.state';
import {initializeMovieDetailsState, MovieDetailsState} from '../movie-details/movie-details.state';

export interface RootState {
  params: ParamsState;
  movies: MoviesState;
  movieDetails: MovieDetailsState;
}

export function initializeRootState() {
  return {
    params: initializeParamsState(),
    movies: initializeMoviesState(),
    movieDetails: initializeMovieDetailsState(),
  };
}

