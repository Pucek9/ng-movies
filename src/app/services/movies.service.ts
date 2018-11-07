import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Movie} from '../models';

const apiBase = `${environment.host}/api/${environment.apiVersion}`;

@Injectable({providedIn: 'root'})
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Movie[]>(`${apiBase}/movie`);
  }

  getById(imdbId: string) {
    return this.http.get(`${apiBase}/mocie/${imdbId}`);
  }

}
