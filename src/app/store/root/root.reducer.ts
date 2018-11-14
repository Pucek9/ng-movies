import {combineReducers} from '@ngrx/store';

import * as RootActions from './root.actions';
import {RootState, initializeRootState} from './root.state';
import {paramsReducer} from '../params/params.reducer';
import {moviesReducer} from '../movies/movies.reducer';

export type Action = RootActions.RootActions;

const defaultState: RootState = initializeRootState();
const reducers = {
  params: paramsReducer,
  movies: moviesReducer,
};

export function rootReducer(state = defaultState, action: Action) {
  console.log('rootReducer', state, action);
  return combineReducers(reducers)(state, action);

}
