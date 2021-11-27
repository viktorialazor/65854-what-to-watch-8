import {FilmProcess} from '../../types/state';
import {ACTIVE_GENRE, FILM_COUNT} from '../../const';
import {changeActiveGenre, incrementFilmCount, resetFilmCount} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState: FilmProcess = {
  genrePayload: {
    genre: ACTIVE_GENRE,
    filmList: [],
  },
  filmCount: FILM_COUNT,
};

const filmProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveGenre, (state, action) => {
      state.genrePayload = action.payload;
    })
    .addCase(incrementFilmCount, (state, action) => {
      state.filmCount = state.filmCount + FILM_COUNT;
    })
    .addCase(resetFilmCount, (state, action) => {
      state.filmCount = FILM_COUNT;
    });
});

export {filmProcess};
