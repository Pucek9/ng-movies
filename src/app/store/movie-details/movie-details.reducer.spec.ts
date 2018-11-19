import {Action, movieDetailsReducer} from './movie-details.reducer';
import * as movieDetailsActions from './movie-details.actions';
import {initializeMovieDetailsState, MovieDetailsState} from './movie-details.state';

describe('MovieDetailsReducer', () => {

  const initialState: MovieDetailsState = initializeMovieDetailsState();

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {type: undefined};
      const state = movieDetailsReducer(undefined, <Action>action);

      expect(state).toEqual(initialState);
    });
  });

  describe('action get movie details', () => {
    it('should do nothing', () => {
      const expectedState: MovieDetailsState = {
        _id: null,
        imdbId: null,
        title: null,
        director: null,
        year: null,
        metascore: null,
        actors: [],
        posterUrl: null,
      };
      const action: movieDetailsActions.GetMovieDetails = {type: movieDetailsActions.GET_MOVIE_DETAILS};
      const state = movieDetailsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action got movie details', () => {
    it('should save fetched data', () => {
      const mockState: MovieDetailsState = {
          _id: '',
          imdbId: '',
          title: '',
          director: '',
          year: 2000,
          metascore: 60,
          actors: [],
          posterUrl: '',
        } as MovieDetailsState;
      const expectedState: MovieDetailsState = Object.assign({}, mockState);
      const action: movieDetailsActions.GotMovieDetails = {type: movieDetailsActions.GOT_MOVIE_DETAILS, payload: mockState};
      const state = movieDetailsReducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('action clear', () => {
    it('should clean state', () => {
      const mockState: MovieDetailsState = {
        _id: '',
        imdbId: '',
        title: '',
        director: '',
        year: 2000,
        metascore: 50,
        actors: [],
        posterUrl: '',
      } as MovieDetailsState;
      const action: movieDetailsActions.Clear = {type: movieDetailsActions.CLEAR};
      const state = movieDetailsReducer(mockState, action);

      expect(state).toEqual(initialState);
    });
  });

});
