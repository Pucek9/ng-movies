import {createSelector} from '@ngrx/store';

export const getActorDetailsState = state => state[0].actorDetails;

export const getActorDetailsSelector = createSelector(getActorDetailsState);
