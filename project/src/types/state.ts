import {FilmDataType} from '../types/films';

export type State = {
  genrePayload: {
    genre: string,
    filmList: FilmDataType[],
  },
  filmCount: number
};
