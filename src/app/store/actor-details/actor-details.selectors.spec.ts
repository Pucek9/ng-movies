import {ActorDetailsState, initializeActorDetailsState} from './actor-details.state';
import {Action, actorDetailsReducer} from './actor-details.reducer';
import {getActorDetailsSelector} from './actor-details.selectors';
import {initializeRootState, RootState} from '../root/root.state';

describe('actor details selector', () => {
  let initialState: RootState[];
  beforeEach(() => {
    initialState = [initializeRootState()];
  });

  describe('getActorDetailsSelector', () => {
    it('should return the default state', () => {
      const selected = getActorDetailsSelector(initialState, null);
      expect(selected).toEqual(initializeActorDetailsState());
    });
  });
});



