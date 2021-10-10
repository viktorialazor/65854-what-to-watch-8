import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoFilmSettings = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title = {PromoFilmSettings.TITLE}
      genre = {PromoFilmSettings.GENRE}
      year = {PromoFilmSettings.YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
