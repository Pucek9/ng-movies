import {Actor} from './actor.model';

export class Movie {
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Array<Actor>;
  posterUrl: string;
}

