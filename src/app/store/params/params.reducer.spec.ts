import {Action, paramsReducer} from './params.reducer';
import * as paramsActions from './params.actions';
import {initializeParamsState, ParamsState, sortByEnum, sortDirEnum} from './params.state';

describe('ParamsReducer', () => {

  const initialState: ParamsState = initializeParamsState();

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {type: undefined};
      const state = paramsReducer(undefined, <Action>action);

      expect(state).toEqual(initialState);
    });
  });

  describe('action set limit', () => {
    it('should increase limit', () => {
      const expectedState: ParamsState = {
        limit: 2,
        page: 1,
        sortBy: sortByEnum.TITLE,
        sortDir: sortDirEnum.ASCENDING
      };
      const action: paramsActions.SetLimit = {type: paramsActions.SET_LIMIT, payload: 2};
      const state = paramsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action set sortBy', () => {
    it('should change sortBy', () => {
      const expectedState: ParamsState = {
        limit: 0,
        page: 1,
        sortBy: sortByEnum.YEAR,
        sortDir: sortDirEnum.ASCENDING
      };
      const action: paramsActions.SetSortBy = {type: paramsActions.SET_SORT_BY, payload: sortByEnum.YEAR};
      const state = paramsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action set setPage', () => {
    it('should change page', () => {
      const expectedState: ParamsState = {
        limit: 0,
        page: 3,
        sortBy: sortByEnum.TITLE,
        sortDir: sortDirEnum.ASCENDING
      };
      const action: paramsActions.SetPage = {type: paramsActions.SET_PAGE, payload: 3};
      const state = paramsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action set SortDir', () => {
    it('should change sortDir', () => {
      const expectedState: ParamsState = {
        limit: 0,
        page: 1,
        sortBy: sortByEnum.TITLE,
        sortDir: sortDirEnum.DESCENDING
      } as ParamsState;
      const action: paramsActions.SetSortDir = {type: paramsActions.SET_SORT_DIR, payload: sortDirEnum.DESCENDING};
      const state = paramsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
