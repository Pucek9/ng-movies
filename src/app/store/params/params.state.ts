export interface ParamsState {
  limit: number;
  page: number;
  sortBy: '_id' | 'title' | 'director' | 'year' | 'metascore';
  sortDir: -1 | 1;
}

export function initializeParamsState(): ParamsState {
  return {
    limit: 0,
    page: 1,
    sortBy: '_id',
    sortDir: 1
  };
}
