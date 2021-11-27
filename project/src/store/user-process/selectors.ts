import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[NameSpace.user].authorizationStatus;
