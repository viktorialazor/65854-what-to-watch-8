import {ActionType, genreListPayload, ChangeActiveGenreAction, IncrementFilmCountAction, ResetFilmCountAction} from '../types/action';
import {FilmDataType, FilmReviewType} from '../types/films';

export const changeActiveGenre = (genrePayload: genreListPayload): ChangeActiveGenreAction => ({
  type: ActionType.ChangeActiveGenre,
  payload: genrePayload,
});

export const incrementFilmCount = (count: number): IncrementFilmCountAction => ({
  type: ActionType.IncrementFilmCount,
  payload: count,
});

export const resetFilmCount = (count: number): ResetFilmCountAction => ({
  type: ActionType.ResetFilmCount,
  payload: count,
});

export const loadFilms = (films: FilmDataType[] | []) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const loadFavoriteFilms = (favoriteFilms: FilmDataType[] | []) => ({
  type: ActionType.LoadFavoriteFilms,
  payload: favoriteFilms,
} as const);

export const loadSimilarFilms = (films: FilmDataType[] | []) => ({
  type: ActionType.LoadSimilarFilms,
  payload: films,
} as const);

export const loadFilm = (film: FilmDataType) => ({
  type: ActionType.LoadFilm,
  payload: film,
} as const);

export const loadPromoFilm = (film: FilmDataType) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
} as const);

export const loadComments = (comments: FilmReviewType[] | []) => ({
  type: ActionType.LoadComments,
  payload: comments,
} as const);

export const requireAuthorization = (authStatus: string) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = (authStatus: string) => ({
  type: ActionType.RequireLogout,
  payload: authStatus,
} as const);

export const redirectToRoute = (url: string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
