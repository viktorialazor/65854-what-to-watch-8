import {createAction} from '@reduxjs/toolkit';
import {ActionType, genreListPayload, changeFilmStatus} from '../types/action';
import {FilmDataType, FilmReviewType} from '../types/films';

export const changeActiveGenre = createAction(
  ActionType.ChangeActiveGenre,
  (genrePayload: genreListPayload) => ({
    payload: genrePayload,
  }),
);

export const incrementFilmCount = createAction(
  ActionType.IncrementFilmCount,
  (count: number) => ({
    payload: count,
  }),
);

export const resetFilmCount = createAction(
  ActionType.ResetFilmCount,
  (count: number) => ({
    payload: count,
  }),
);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: FilmDataType[] | []) => ({
    payload: films,
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.LoadFavoriteFilms,
  (favoriteFilms: FilmDataType[] | []) => ({
    payload: favoriteFilms,
  }),
);

export const changeFavoriteFilm = createAction(
  ActionType.ChangeFavoriteFilm,
  (changedFilm: changeFilmStatus) => ({
    payload: changedFilm,
  }),
);

export const loadSimilarFilms = createAction(
  ActionType.LoadSimilarFilms,
  (films: FilmDataType[] | []) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  ActionType.LoadFilm,
  (film: FilmDataType) => ({
    payload: film,
  }),
);

export const loadPromoFilm = createAction(
  ActionType.LoadPromoFilm,
  (film: FilmDataType) => ({
    payload: film,
  }),
);

export const loadComments = createAction(
  ActionType.LoadComments,
  (comments: FilmReviewType[] | []) => ({
    payload: comments,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: string) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(
  ActionType.RequireLogout,
  (authStatus: string) => ({
    payload: authStatus,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: string) => ({
    payload: url,
  }),
);
