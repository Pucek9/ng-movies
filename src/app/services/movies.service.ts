import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

import {AuthenticationService} from './authentication.service';

@Injectable({providedIn: 'root'})
export class MoviesService {

  readonly httpOptions;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authenticationService.currentUserValue.token
      })
    };
  }

  getAll() {
    return this.http.get(`${environment.apiURL}/movie`, this.httpOptions);
  }

  getById(imdbId: string) {
    return this.http.get(`${environment.apiURL}/movie/${imdbId}`, this.httpOptions);
  }

}
