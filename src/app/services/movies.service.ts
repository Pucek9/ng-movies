import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';


@Injectable({providedIn: 'root'})
export class MoviesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getHeaders( user) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': user.token,
    });
  }

  getAll(params, user) {
    return this.http.get(`${environment.apiURL}/movie`, {headers: this.getHeaders(user), params});
  }

  getById(imdbId: string, user) {
    return this.http.get(`${environment.apiURL}/movie/${imdbId}`, {headers: this.getHeaders(user)});
  }

}
