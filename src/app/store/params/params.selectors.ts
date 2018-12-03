import {createSelector} from '@ngrx/store';
import {sortDirEnum} from './params.state';

export const getParamsState = state => state[0].params;

export const paramsSelector = createSelector(getParamsState);
export const limitSelector = createSelector(getParamsState, params => params.limit);
export const sortDirAscendingSelector = createSelector(getParamsState,  params => params.sortDir === sortDirEnum.ASCENDING);
export const pageSelector = createSelector(getParamsState, params => params.page);
