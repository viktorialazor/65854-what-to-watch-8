import {UserProcess} from '../../types/state';
import {AUTHORIZATION_STATUS} from '../../const';
import {requireAuthorization, requireLogout} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState: UserProcess = {
  authorizationStatus: AUTHORIZATION_STATUS.UNKNOWN,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AUTHORIZATION_STATUS.NO_AUTH;
    });
});

export {userProcess};
