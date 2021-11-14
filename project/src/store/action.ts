import {ActionType, ChangeActiveGenreAction, FilmListByGenreAction, FilmActiveAction, IncrementFilmCountAction, ResetFilmCountAction} from '../types/action';
import {FilmDataType} from '../types/films';

export const changeActiveGenre = (genre: string): ChangeActiveGenreAction => ({
  type: ActionType.ChangeActiveGenre,
  payload: genre,
});

export const filmListByGenre = (filmList: FilmDataType[]): FilmListByGenreAction => ({
  type: ActionType.FilmListByGenre,
  payload: filmList,
});

export const filmActive = (film: FilmDataType): FilmActiveAction => ({
  type: ActionType.FilmActive,
  payload: film,
});

export const incrementFilmCount = (count: number): IncrementFilmCountAction => ({
  type: ActionType.IncrementFilmCount,
  payload: count,
});

export const resetFilmCount = (count: number): ResetFilmCountAction => ({
  type: ActionType.ResetFilmCount,
  payload: count,
});
