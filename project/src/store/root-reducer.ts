import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {filmProcess} from './film-process/film-process';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  film = 'FILM',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmData,
  [NameSpace.film]: filmProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
