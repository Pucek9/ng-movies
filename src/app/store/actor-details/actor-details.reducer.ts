import {ActorDetailsState, initializeActorDetailsState} from './actor-details.state';
import * as ActorActions from './actor-details.actions';
import {createSelector} from '@ngrx/store';

export type Action = ActorActions.ActorDetailsActions;

const defaultState: ActorDetailsState = initializeActorDetailsState();

export function actorDetailsReducer(state = defaultState, action: Action) {

  switch (action.type) {

    case ActorActions.GET_ACTOR_DETAILS: {

      return state;

    }

    case ActorActions.GOT_ACTOR_DETAILS: {

      return action.payload;

    }

    case ActorActions.GOT_ERROR: {

      return state;

    }

    case ActorActions.CLEAR: {

      return initializeActorDetailsState();

    }

    default: {
      return state;
    }
  }

}

export const getActorDetailsState = state => state[0].actorDetails;

export const getActorDetailsSelector = createSelector(getActorDetailsState);
