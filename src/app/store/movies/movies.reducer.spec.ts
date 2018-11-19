import {Action, moviesReducer} from './movies.reducer';
import * as moviesActions from './movies.actions';
import {initializeMoviesState, MoviesState} from './movies.state';

describe('MoviesReducer', () => {

  const initialState: MoviesState = initializeMoviesState();

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {type: undefined};
      const state = moviesReducer(undefined, <Action>action);

      expect(state).toEqual(initialState);
    });
  });

  describe('action get movies', () => {
    it('should do nothing', () => {
      const expectedState: MoviesState = {
        collection: [],
        total: 0
      };
      const action: moviesActions.GetMovieList = {type: moviesActions.GET_MOVIE_LIST};
      const state = moviesReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action got movies', () => {
    it('should save fetched data', () => {
      const mockState: MoviesState = {
        collection: [{
          _id: '',
          imdbId: '',
          title: '',
          director: '',
          year: 2000,
          metascore: 50,
          actors: [],
          posterUrl: '',
        }],
        total: 1
      } as MoviesState;
      const expectedState: MoviesState = Object.assign({}, mockState);
      const action: moviesActions.GotMovieList = {type: moviesActions.GOT_MOVIE_LIST, payload: mockState};
      const state = moviesReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

});
