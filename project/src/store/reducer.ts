import {ActionType, Actions, ChangeActiveGenreAction} from '../types/action';
import {State} from '../types/state';
import {ACTIVE_GENRE, FILM_COUNT} from '../const';
import films from '../mocks/films';

const initialState = {
  genrePayload: {
    genre: ACTIVE_GENRE,
    filmList: films,
  },
  filmCount: FILM_COUNT,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeActiveGenre:
      return {...state, genrePayload: (action as ChangeActiveGenreAction).payload};
    case ActionType.IncrementFilmCount:
      return {...state, filmCount: state.filmCount + FILM_COUNT};
    case ActionType.ResetFilmCount:
      return {...state, filmCount: FILM_COUNT};
    default:
      return state;
  }
};

export {reducer};
