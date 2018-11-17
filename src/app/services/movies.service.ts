import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';


@Injectable({providedIn: 'root'})
export class MoviesService {

  private readonly headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getAll(params, user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': user.token,
    });
    console.log({headers, params});
    return this.http.get(`${environment.apiURL}/movie`, {headers, params});
  }

  getById(imdbId: string) {
    return this.http.get(`${environment.apiURL}/movie/${imdbId}`, {headers: this.headers});
  }

}
