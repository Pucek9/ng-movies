import {MovieDetailsState} from '../movie-details/movie-details.state';

export interface MoviesState {
  collection: MovieDetailsState[];
  total: number;
}

export function initializeMoviesState(): MoviesState {
  return {
    collection: [],
    total: 0
  };
}

