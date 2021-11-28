import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {FilmDataType} from './films';

export const ActionType = {
  ChangeActiveGenre: 'film/changeActiveGenre',
  IncrementFilmCount: 'film/incrementFilmCount',
  ResetFilmCount: 'film/resetFilmCount',
  LoadFilms: 'data/loadFilms',
  LoadFavoriteFilms: 'data/loadFavoriteFilms',
  ChangeFavoriteFilm: 'data/changeFavoriteFilm',
  LoadSimilarFilms: 'data/loadSimilarFilms',
  LoadFilm: 'data/loadFilm',
  LoadPromoFilm: 'data/loadPromoFilm',
  LoadComments: 'data/loadComments',
  RequireAuthorization: 'user/requireAuthorization',
  RequireLogout: 'user/requireLogout',
  RedirectToRoute: 'user/redirectToRoute',
};

export type genreListPayload = {
  genre: string,
  filmList: FilmDataType[] | [],
}

export type changeFilmStatus = {
  filmId: number,
  status: boolean,
}

export type RedirectToRouteAction = {
  type: typeof ActionType.RedirectToRoute;
  payload: string;
};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
