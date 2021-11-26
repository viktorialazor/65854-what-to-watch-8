import {ActionType, Actions, ChangeActiveGenreAction, LoadFilmsAction, LoadFavoriteFilmsAction, ChangeFavoriteFilmAction, LoadSimilarFilmsAction, LoadFilmAction, LoadPromoFilmAction, LoadCommentsAction, RequireAuthorizationAction, RequireLogoutAction} from '../types/action';
import {State} from '../types/state';
import {FilmDataType} from '../types/films';
import {ACTIVE_GENRE, FILM_COUNT, AUTHORIZATION_STATUS, emptyFilm} from '../const';
import {adaptFilmToClient} from '../utils/adapter';

const initialState = {
  films: [],
  favoriteFilms: [],
  similarFilms: [],
  film: undefined,
  promoFilm: emptyFilm,
  comments: [],
  genrePayload: {
    genre: ACTIVE_GENRE,
    filmList: [],
  },
  filmCount: FILM_COUNT,
  authorizationStatus: AUTHORIZATION_STATUS.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeActiveGenre:
      return {...state, genrePayload: (action as ChangeActiveGenreAction).payload};
    case ActionType.IncrementFilmCount:
      return {...state, filmCount: state.filmCount + FILM_COUNT};
    case ActionType.ResetFilmCount:
      return {...state, filmCount: FILM_COUNT};
    case ActionType.LoadFilms:
      return {...state, films: (action as LoadFilmsAction).payload, isDataLoaded: true};
    case ActionType.LoadFavoriteFilms:
      return {...state, favoriteFilms: (action as LoadFavoriteFilmsAction).payload};
    case ActionType.ChangeFavoriteFilm: {
      let film = Object.assign({}, state.film);
      let promoFilm = Object.assign({}, state.promoFilm);
      if (film?.id === (action as ChangeFavoriteFilmAction).payload.filmId) {
        film = {...film, isFavorite: (action as ChangeFavoriteFilmAction).payload.status};
      }
      if (promoFilm.id === (action as ChangeFavoriteFilmAction).payload.filmId) {
        promoFilm = {...promoFilm, isFavorite: (action as ChangeFavoriteFilmAction).payload.status};
      }
      return {...state, film, promoFilm};
    }
    case ActionType.LoadSimilarFilms:
      return {...state, similarFilms: ((action as LoadSimilarFilmsAction).payload).map((film: FilmDataType) => adaptFilmToClient(film))};
    case ActionType.LoadFilm:
      return {...state, film: adaptFilmToClient((action as LoadFilmAction).payload)};
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: adaptFilmToClient((action as LoadPromoFilmAction).payload)};
    case ActionType.LoadComments:
      return {...state, comments: (action as LoadCommentsAction).payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: (action as RequireAuthorizationAction).payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: (action as RequireLogoutAction).payload};
    default:
      return state;
  }
};

export {reducer};
