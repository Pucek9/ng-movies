export interface ParamsState {
  limit: number;
  page: number;
  sortBy: '_id' | 'title' | 'director' | 'year' | 'metascore';
  sortDir: -1 | 1;
}

export function initializeParamsState(): ParamsState {
  return JSON.parse(localStorage.getItem('params')) || {
    limit: 0,
    page: 1,
    sortBy: 'title',
    sortDir: 1
  };
}
