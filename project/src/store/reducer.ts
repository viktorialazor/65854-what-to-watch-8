import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {ACTIVE_GENRE, FILM_COUNT} from '../const';
import films from '../mocks/films';

const initialState = {
  activeGenre: ACTIVE_GENRE,
  filmList: films,
  film: films[0],
  filmCount: FILM_COUNT,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeActiveGenre:
      return {...state, activeGenre: action.payload};
    case ActionType.FilmListByGenre:
      return {...state, filmList: action.payload};
    case ActionType.FilmActive:
      return {...state, film: action.payload};
    case ActionType.IncrementFilmCount:
      return {...state, filmCount: state.filmCount + FILM_COUNT};
    case ActionType.ResetFilmCount:
      return {...state, filmCount: FILM_COUNT};
    default:
      return state;
  }
};

export {reducer};
