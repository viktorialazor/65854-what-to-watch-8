import {FilmReviewType, FilmDataType} from './films';

export type State = {
  films: FilmDataType[] | [],
  favoriteFilms: FilmDataType[] | [],
  similarFilms: FilmDataType[] | [],
  film?: FilmDataType,
  promoFilm: FilmDataType,
  comments: FilmReviewType[] | [],
  genrePayload: {
    genre: string,
    filmList: FilmDataType[] | [],
  },
  filmCount: number,
  authorizationStatus: string,
  isDataLoaded: boolean,
};
