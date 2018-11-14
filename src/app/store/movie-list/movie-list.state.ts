import {Movie} from '../../models';

export interface MovieListState {
  params: {
    limit: number;
    page: number;
    sortBy: '_id' | 'title' | 'director' | 'year' | 'metascore';
    sortDir: -1 | 1;
  };
  movies: Movie[];
}

export const initializeMovieListState = function () {
  return {
    params: {
      limit: 0,
      page: 1,
      sortBy: '_id',
      sortDir: 1,
    },
    movies: []
  } as MovieListState;
};

