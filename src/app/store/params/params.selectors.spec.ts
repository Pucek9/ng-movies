import {initializeParamsState, sortDirEnum} from './params.state';
import {initializeRootState, RootState} from '../root/root.state';
import {limitSelector, pageSelector, paramsSelector, sortDirAscendingSelector} from './params.selectors';

describe('params selectors', () => {
  let initialState: RootState[];
  beforeEach(() => {
    initialState = [initializeRootState()];
  });

  describe('paramsSelector', () => {
    it('should return the default state', () => {
      const selected = paramsSelector(initialState, null);
      expect(selected).toEqual(initializeParamsState());
    });
  });

  describe('limitSelector', () => {
    it('should return limit state', () => {
      const selected = limitSelector(initialState);
      expect(selected).toBe(0);
    });
  });

  describe('pageSelector', () => {
    it('should return page state', () => {
      const selected = pageSelector(initialState);
      expect(selected).toBe(1);
    });
  });

  describe('sortDirAscendingSelector', () => {
    it('should return the true for sort dir ascending state', () => {
      const selected = sortDirAscendingSelector(initialState);
      expect(selected).toBeTruthy();
    });

    it('should return the false for sort dir descending state', () => {
      initialState[0].params.sortDir = sortDirEnum.DESCENDING;
      const selected = sortDirAscendingSelector(initialState);
      expect(selected).toBeFalsy();
    });

  });

});
