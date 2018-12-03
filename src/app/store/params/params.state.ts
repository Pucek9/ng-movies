export enum sortByEnum {
  ID = '_id',
  TITLE = 'title',
  DIRECTOR = 'director',
  YEAR = 'year',
  METASCORE = 'metascore',
}

export enum sortDirEnum {
  ASCENDING = 1,
  DESCENDING = -1,
}

export interface ParamsState {
  limit: number;
  page: number;
  sortBy: sortByEnum;
  sortDir: sortDirEnum;
}

export function initializeParamsState(): ParamsState {
  return JSON.parse(localStorage.getItem('params')) || {
    limit: 0,
    page: 1,
    sortBy: sortByEnum.TITLE,
    sortDir: sortDirEnum.ASCENDING
  };
}
