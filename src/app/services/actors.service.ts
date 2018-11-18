import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {prepareCommonHeaders} from '../helpers/helpers';


@Injectable({providedIn: 'root'})
export class ActorsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getById(imdbId: string, user) {
    return this.http.get(`${environment.apiURL}/actor/${imdbId}`, {headers: prepareCommonHeaders(user)});
  }

}
