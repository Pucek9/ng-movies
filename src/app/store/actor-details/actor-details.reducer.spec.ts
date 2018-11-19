import {Action, actorDetailsReducer} from './actor-details.reducer';
import * as actorDetailsActions from './actor-details.actions';
import {initializeActorDetailsState, ActorDetailsState} from './actor-details.state';

describe('ActorDetailsReducer', () => {

  const initialState: ActorDetailsState = initializeActorDetailsState();

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {type: undefined};
      const state = actorDetailsReducer(undefined, <Action>action);

      expect(state).toEqual(initialState);
    });
  });

  describe('action get actor details', () => {
    it('should do nothing', () => {
      const expectedState: ActorDetailsState = {
        _id: null,
        imdbId: null,
        name: null,
        birthday: null,
        country: null,
        gender: null,
        photoUrl: null,
      };
      const action: actorDetailsActions.GetActorDetails = {type: actorDetailsActions.GET_ACTOR_DETAILS};
      const state = actorDetailsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action got actor details', () => {
    it('should save fetched data', () => {
      const mockState: ActorDetailsState = {
        _id: '',
        imdbId: '',
        name: '',
        birthday: '',
        country: '',
        gender: 'male',
        photoUrl: '',
        } as ActorDetailsState;
      const expectedState: ActorDetailsState = Object.assign({}, mockState);
      const action: actorDetailsActions.GotActorDetails = {type: actorDetailsActions.GOT_ACTOR_DETAILS, payload: mockState};
      const state = actorDetailsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action clear', () => {
    it('should clean state', () => {
      const mockState: ActorDetailsState = {
        _id: '',
        imdbId: '',
        name: '',
        birthday: '',
        country: '',
        gender: 'male',
        photoUrl: '',
      } as ActorDetailsState;
      const action: actorDetailsActions.Clear = {type: actorDetailsActions.CLEAR};
      const state = actorDetailsReducer(mockState, action);

      expect(state).toEqual(initialState);
    });
  });

});
