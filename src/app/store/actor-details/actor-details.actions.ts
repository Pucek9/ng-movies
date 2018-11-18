import {Action} from '@ngrx/store';
import {ActorDetailsState} from './actor-details.state';

export const GET_ACTOR_DETAILS = '[Actor] GET_ACTOR_DETAILS';
export const GOT_ACTOR_DETAILS = '[Actor] GOT_ACTOR_DETAILS';
export const GOT_ERROR = '[Actor] GOT_ERROR';
export const CLEAR = '[Actor] CLEAR';


export class GetActorDetails implements Action {
  readonly type = GET_ACTOR_DETAILS;

  constructor(public payload: any = null) {
  }

}

export class GotActorDetails implements Action {
  readonly type = GOT_ACTOR_DETAILS;

  constructor(public payload: ActorDetailsState) {
  }

}

export class GotError implements Action {
  readonly type = GOT_ERROR;

  constructor(public payload: Error) {
  }

}

export class Clear implements Action {
  readonly type = CLEAR;

  constructor(public payload: any = null) {
  }

}

export type ActorDetailsActions = GetActorDetails | GotActorDetails | GotError | Clear;
