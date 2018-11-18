import * as ParamsActions from '../params/params.actions';
import * as MoviesActions from '../movies/movies.actions';
import * as MovieDetailsAction from '../movie-details/movie-details.actions';
import * as ActorDetailsAction from '../actor-details/actor-details.actions';

export type RootActions =
  ParamsActions.ParamsActions
  | MoviesActions.MoviesActions
  | MovieDetailsAction.MovieDetailsActions
  | ActorDetailsAction.ActorDetailsActions;
