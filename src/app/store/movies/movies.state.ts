import {Movie} from '../../models';

export interface MoviesState {
  collection: Movie[];
  total: number;
}

export function initializeMoviesState(): MoviesState {
  return {
    collection: [],
    total: 0
  };
}

