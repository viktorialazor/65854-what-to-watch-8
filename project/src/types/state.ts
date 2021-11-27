import {FilmReviewType, FilmDataType} from './films';
import {RootState} from '../store/root-reducer';

export type FilmData = {
  films: FilmDataType[] | [],
  favoriteFilms: FilmDataType[] | [],
  similarFilms: FilmDataType[] | [],
  film?: FilmDataType,
  promoFilm: FilmDataType,
  comments: FilmReviewType[] | [],
  isDataLoaded: boolean,
};

export type FilmProcess = {
  genrePayload: {
    genre: string,
    filmList: FilmDataType[] | [],
  },
  filmCount: number,
};

export type UserProcess = {
  authorizationStatus: string,
};

export type State = RootState;
