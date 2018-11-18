import {ActorDetailsState} from '../actor-details/actor-details.state';

export interface MovieDetailsState {
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Array<ActorDetailsState>;
  posterUrl: string;
}

export function initializeMovieDetailsState(): MovieDetailsState {
  return {
    _id: null,
    imdbId: null,
    title: null,
    director: null,
    year: null,
    metascore: null,
    actors: [],
    posterUrl: null,
  };
}

