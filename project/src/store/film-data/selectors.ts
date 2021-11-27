import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {FilmDataType, FilmReviewType} from '../../types/films';

export const getFilms = (state: State): FilmDataType[] | [] => state[NameSpace.data].films;
export const getFavoriteFilms = (state: State): FilmDataType[] | [] => state[NameSpace.data].favoriteFilms;
export const getSimilarFilms = (state: State): FilmDataType[] | [] => state[NameSpace.data].similarFilms;
export const getFilm = (state: State): FilmDataType | undefined => state[NameSpace.data].film;
export const getPromoFilm = (state: State): FilmDataType => state[NameSpace.data].promoFilm;
export const getComments = (state: State): FilmReviewType[] => state[NameSpace.data].comments;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
