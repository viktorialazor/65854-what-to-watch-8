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
//
// export type ChangeActiveGenreAction = {
//   type: typeof ActionType.ChangeActiveGenre;
//   payload: genreListPayload,
// };
//
// export type IncrementFilmCountAction = {
//   type: typeof ActionType.IncrementFilmCount;
//   payload: number;
// };
//
// export type ResetFilmCountAction = {
//   type: typeof ActionType.ResetFilmCount;
//   payload: number;
// };
//
// export type LoadFilmsAction = {
//   type: typeof ActionType.LoadFilms;
//   payload: FilmDataType[] | [];
// };
//
// export type LoadFavoriteFilmsAction = {
//   type: typeof ActionType.LoadFavoriteFilms;
//   payload: FilmDataType[] | [];
// };
//
// export type ChangeFavoriteFilmAction = {
//   type: typeof ActionType.ChangeFavoriteFilm;
//   payload: changeFilmStatus;
// };
//
// export type LoadSimilarFilmsAction = {
//   type: typeof ActionType.LoadSimilarFilms;
//   payload: FilmDataType[] | [];
// };
//
// export type LoadFilmAction = {
//   type: typeof ActionType.LoadFilm;
//   payload: FilmDataType;
// };
//
// export type LoadPromoFilmAction = {
//   type: typeof ActionType.LoadPromoFilm;
//   payload: FilmDataType;
// };
//
// export type LoadCommentsAction = {
//   type: typeof ActionType.LoadComments;
//   payload: FilmReviewType[] | [];
// };
//
// export type RequireAuthorizationAction = {
//   type: typeof ActionType.RequireAuthorization;
//   payload: string;
// };
//
// export type RequireLogoutAction = {
//   type: typeof ActionType.RequireLogout;
//   payload: string;
// };

export type RedirectToRouteAction = {
  type: typeof ActionType.RedirectToRoute;
  payload: string;
};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
