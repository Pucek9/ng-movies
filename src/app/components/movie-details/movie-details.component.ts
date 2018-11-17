import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services';
import * as paramsActions from '../../store/params/params.actions';
import {select, Store} from '@ngrx/store';
import {MoviesState} from '../../store/movies/movies.state';
import {getMovieDetailsSelector} from '../../store/movie-details/movie-details.reducer';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public details$ = this.store$.pipe(select(getMovieDetailsSelector));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<MoviesState>,
  ) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   // this.store$.dispatch(new paramsActions.GetMovie(params.id));
    // });
  }

}
