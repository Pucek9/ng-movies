import {generateArrayOfNumbers} from '../../helpers/helpers';

import {createSelector} from '@ngrx/store';
import {limitSelector} from '../params/params.selectors';
import {moviesTotalSelector} from '../movies/movies.selectors';

export const pagesListSelector = createSelector(
  limitSelector,
  moviesTotalSelector,
  (limit: number, total: number) => {
    const numberOfPages = limit === 0 || total === 0 ? 1 : total / limit;
    return generateArrayOfNumbers(Math.ceil(numberOfPages));
  }
);
