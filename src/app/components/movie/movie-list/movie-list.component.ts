import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

import {Movie, User} from '../../../models';
import {AuthenticationService, MoviesService} from '../../../services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  // currentUser: User;
  // currentUserSubscription: Subscription;
  movies: Movie[];

  constructor(
    // private authenticationService: AuthenticationService,
    private moviesService: MoviesService,
  ) {
    // this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    //   this.currentUser = user;
    // });
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.currentUserSubscription.unsubscribe();
  }

  private loadAllMovies() {
    this.moviesService.getAll().pipe(first()).subscribe((movies: object) => {
      // @ts-ignore
      this.movies = movies.collection;
    });
  }
}
