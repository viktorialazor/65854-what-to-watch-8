import {FilmDataType} from './films';

export const ActionType = {
  ChangeActiveGenre: 'film/changeActiveGenre',
  FilmListByGenre: 'film/filmListByGenre',
  FilmActive: 'film/filmActive',
  IncrementFilmCount: 'film/incrementFilmCount',
  ResetFilmCount: 'film/resetFilmCount',
};

export type ChangeActiveGenreAction = {
  type: typeof ActionType.ChangeActiveGenre;
  payload: string,
};

export type FilmListByGenreAction = {
  type: typeof ActionType.FilmListByGenre;
  payload: FilmDataType[],
};

export type FilmActiveAction = {
  type: typeof ActionType.FilmActive;
  payload: FilmDataType,
};

export type IncrementFilmCountAction = {
  type: typeof ActionType.IncrementFilmCount;
  payload: number;
};

export type ResetFilmCountAction = {
  type: typeof ActionType.ResetFilmCount;
  payload: number;
};

export type Actions = ChangeActiveGenreAction | FilmListByGenreAction | FilmActiveAction | IncrementFilmCountAction | ResetFilmCountAction;
