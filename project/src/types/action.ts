import {FilmDataType} from './films';

export enum ActionType {
  ChangeActiveGenre = 'film/changeActiveGenre',
  FilmListByGenre = 'film/filmListByGenre',
  FilmActive = 'film/filmActive',
  IncrementFilmCount = 'film/incrementFilmCount',
  ResetFilmCount = 'film/resetFilmCount',
}

export type ChangeActiveGenreAction = {
  type: ActionType.ChangeActiveGenre;
  payload: string,
};

export type FilmListByGenreAction = {
  type: ActionType.FilmListByGenre;
  payload: FilmDataType[],
};

export type FilmActiveAction = {
  type: ActionType.FilmActive;
  payload: FilmDataType,
};

export type IncrementFilmCountAction = {
  type: ActionType.IncrementFilmCount;
  payload: number;
};

export type ResetFilmCountAction = {
  type: ActionType.ResetFilmCount;
  payload: number;
};

export type Actions = ChangeActiveGenreAction | FilmListByGenreAction | FilmActiveAction | IncrementFilmCountAction | ResetFilmCountAction;
