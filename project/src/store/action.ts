import {ActionType, genreListPayload, ChangeActiveGenreAction, IncrementFilmCountAction, ResetFilmCountAction} from '../types/action';

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
