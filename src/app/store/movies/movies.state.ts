import {Movie} from '../../models';

export interface MoviesState {
  collection: Movie[];
  totals: number;
}

export function initializeMoviesState(): MoviesState {
  return {
    collection: [],
    totals: 0
  };
}

