import {createSelector} from '@ngrx/store';

import {ParamsState, initializeParamsState} from './params.state';
import * as ParamsAction from './params.actions';

export type Action = ParamsAction.ParamsActions;

const defaultState: ParamsState = initializeParamsState();

export function paramsReducer(state = defaultState, action: Action) {

  switch (action.type) {

    case ParamsAction.SET_LIMIT: {

      return {
        ...state,
        limit: action.payload
      };

    }

    case ParamsAction.SET_PAGE: {

      return {
        ...state,
        page: action.payload
      };

    }

    case ParamsAction.SET_SORT_BY: {

      return {
        ...state,
        sortBy: action.payload
      };

    }

    case ParamsAction.SET_SORT_DIR: {

      return {
        ...state,
        sortDir: action.payload
      };

    }

    default: {
      return state;
    }

  }
}
