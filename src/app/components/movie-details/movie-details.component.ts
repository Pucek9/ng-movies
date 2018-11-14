import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/index';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getById(params.id).subscribe(movie => {
        this.data = movie;
      });
    });
  }

}
