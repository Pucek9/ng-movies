import {Component, OnInit, OnDestroy} from '@angular/core';
import {first} from 'rxjs/operators';

import {Movie, User} from '../../../models';
import {MoviesService} from '../../../services';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];

  constructor(
    private moviesService: MoviesService,
  ) {
  }

  ngOnInit() {
    this.loadAllMovies();
  }

  ngOnDestroy() {
  }

  private loadAllMovies() {
    this.moviesService.getAll().pipe(first()).subscribe((movies: object) => {
      // @ts-ignore
      this.movies = movies.collection;
    });
  }
}
