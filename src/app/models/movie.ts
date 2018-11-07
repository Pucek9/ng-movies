import {Actor} from './actor';

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

