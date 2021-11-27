import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {genreListPayload} from '../../types/action';

export const getGenrePayload = (state: State): genreListPayload => state[NameSpace.film].genrePayload;
export const getFilmCount = (state: State): number => state[NameSpace.film].filmCount;
