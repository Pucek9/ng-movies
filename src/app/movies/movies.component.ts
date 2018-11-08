import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

import {Movie, User} from '../models';
import {AuthenticationService, MoviesService} from '../services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  movies;

  constructor(
    private authenticationService: AuthenticationService,
    private moviesService: MoviesService,
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllMovies() {
    this.moviesService.getAll().pipe(first()).subscribe(movies => {
      this.movies = movies;
    });
  }
}
