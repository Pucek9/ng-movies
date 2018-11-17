import {Actor, Movie} from '../../models';

export interface MovieDetailsState {
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Array<Actor>;
  posterUrl: string;
}

export function initializeMovieDetailsState(): MovieDetailsState {
  return {
    _id: '',
    imdbId: '',
    title: '',
    director: '',
    year: null,
    metascore: null,
    actors: [],
    posterUrl: '',
  };
}

