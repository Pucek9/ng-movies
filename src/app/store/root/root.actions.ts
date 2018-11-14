import * as ParamsActions from '../params/params.actions';
import * as MoviesActions from '../movies/movies.actions';

export type RootActions = ParamsActions.ParamsActions | MoviesActions.MoviesActions;
