export interface MovieListState {

  limit: number;
  page: number;
  sortBy: '_id' | 'title' | 'director' | 'year' | 'metascore';
  sortDir: -1 | 1;

}

export const initializeMovieListState = function () {
  return {
    limit: 5,
    page: 1,
    sortBy: '_id',
    sortDir: 1,
  } as MovieListState;
};

