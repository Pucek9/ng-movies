import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {prepareCommonHeaders} from '../helpers/helpers';


@Injectable({providedIn: 'root'})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getAll(params, user) {
    return this.http.get(`${environment.apiURL}/movies`, {headers: prepareCommonHeaders(user), params});
  }

  getById(imdbId: string, user) {
    return this.http.get(`${environment.apiURL}/movies/${imdbId}`, {headers: prepareCommonHeaders(user)});
  }

}
