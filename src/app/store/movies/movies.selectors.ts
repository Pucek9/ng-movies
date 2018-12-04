import {createSelector} from '@ngrx/store';

export const getMoviesState = state => state[0].movies;

export const moviesCollectionSelector = createSelector(getMoviesState, (movies => movies.collection));
export const moviesTotalSelector = createSelector(getMoviesState, (movies => movies.total));
