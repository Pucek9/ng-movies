import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

import {AuthenticationService} from './authentication.service';
import {MovieListState} from '../store/movie-list/movie-list.state';
import {select, Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class MoviesService {

  readonly httpOptions;
  private readonly headers: HttpHeaders;
  private params = {};

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private store: Store<MovieListState>
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authenticationService.currentUserValue && authenticationService.currentUserValue.token
    });
    this.store.pipe(select(state => state[0])).subscribe(state => {
      this.params = state && state.params;
    });

  }

  getAll() {
    return this.http.get(`${environment.apiURL}/movie`, {headers: this.headers, params: this.params});
  }

  getById(imdbId: string) {
    return this.http.get(`${environment.apiURL}/movie/${imdbId}`, {headers: this.headers});
  }

}
