import {FilmDataType} from './films';

export const ActionType = {
  ChangeActiveGenre: 'film/changeActiveGenre',
  IncrementFilmCount: 'film/incrementFilmCount',
  ResetFilmCount: 'film/resetFilmCount',
};

export type genreListPayload = {
  genre: string,
  filmList: FilmDataType[],
}

export type ChangeActiveGenreAction = {
  type: typeof ActionType.ChangeActiveGenre;
  payload: genreListPayload,
};

export type IncrementFilmCountAction = {
  type: typeof ActionType.IncrementFilmCount;
  payload: number;
};

export type ResetFilmCountAction = {
  type: typeof ActionType.ResetFilmCount;
  payload: number;
};

export type Actions = ChangeActiveGenreAction | IncrementFilmCountAction | ResetFilmCountAction;
