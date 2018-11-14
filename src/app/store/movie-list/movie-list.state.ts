import {Movie} from '../../models';

export interface MovieListState {
  params: {
    limit: number;
    page: number;
    sortBy: '_id' | 'title' | 'director' | 'year' | 'metascore';
    sortDir: -1 | 1;
  };
  movies: {
    collection: Movie[];
    totals: number;
  };
}

export const initializeMovieListState = function () {
  return {
    params: {
      limit: 0,
      page: 1,
      sortBy: '_id',
      sortDir: 1,
    },
    movies: {
      collection: [],
      totals: 0
    }
  } as MovieListState;
};

