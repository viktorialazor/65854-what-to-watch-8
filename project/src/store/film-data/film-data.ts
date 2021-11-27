import {FilmData} from '../../types/state';
import {FilmDataType} from '../../types/films';
import {emptyFilm} from '../../const';
import {adaptFilmToClient} from '../../utils/adapter';
import {loadFilms, loadFavoriteFilms, changeFavoriteFilm, loadSimilarFilms, loadFilm, loadPromoFilm, loadComments} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState: FilmData = {
  films: [],
  favoriteFilms: [],
  similarFilms: [],
  film: undefined,
  promoFilm: emptyFilm,
  comments: [],
  isDataLoaded: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(changeFavoriteFilm, (state, action) => {
      let film = Object.assign({}, state.film);
      let promoFilm = Object.assign({}, state.promoFilm);
      if (film?.id === action.payload.filmId) {
        film = {...film, isFavorite: action.payload.status};
      }
      if (promoFilm.id === action.payload.filmId) {
        promoFilm = {...promoFilm, isFavorite: action.payload.status};
      }
      state.film = film;
      state.promoFilm = promoFilm;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = (action.payload).map((film: FilmDataType) => adaptFilmToClient(film));
    })
    .addCase(loadFilm, (state, action) => {
      state.film = adaptFilmToClient(action.payload);
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = adaptFilmToClient(action.payload);
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {filmData};
