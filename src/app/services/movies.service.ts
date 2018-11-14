import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';


@Injectable({providedIn: 'root'})
export class MoviesService {

  private readonly headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,

  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authenticationService.currentUserValue && authenticationService.currentUserValue.token
    });
  }

  getAll(params) {
    return this.http.get(`${environment.apiURL}/movie`, {headers: this.headers, params});
  }

  getById(imdbId: string) {
    return this.http.get(`${environment.apiURL}/movie/${imdbId}`, {headers: this.headers});
  }

}
