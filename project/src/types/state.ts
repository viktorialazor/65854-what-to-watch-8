import {FilmDataType} from '../types/films';

export type State = {
  activeGenre: string,
  filmList: FilmDataType[],
  film: FilmDataType,
  filmCount: number
};
