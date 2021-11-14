import React from 'react';
import {FilmDataType} from '../../types/films';
import Logo from '../logo/logo';
import MovieList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';
import MovieInList from '../movie-in-list/movie-in-list';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';

const FILM_CARD_AMOUNT = 4;

type MoviePageProps = {
  tabList: string[];
  activeTab: string;
  getActiveTab: ((activeTab: string) => void);
  films: FilmDataType[];
  film: FilmDataType;
  handleClick: (newActiveClickFilm: FilmDataType) => void;
}

function MoviePage({tabList, activeTab, getActiveTab, films, film, handleClick}: MoviePageProps): JSX.Element {
  const {
    background,
    poster,
    title,
    genre,
    year,
  } = film;

  const getActualMovieInfo = (tab: string): JSX.Element => {
    switch (tab) {
      case 'Overview':
        return <MovieInList film={film} />;
      case 'Details':
        return <MovieDetails film={film} />;
      case 'Reviews':
        return <MovieReviews film={film} />;
    }

    return <MovieInList film={film} />;
  };

  const actualMovieInfo = getActualMovieInfo(activeTab);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a href="/" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre[0]}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs tabList={tabList} activeTabName={activeTab} getActiveTab={getActiveTab}/>
              {actualMovieInfo}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MovieList films={films.slice(0, FILM_CARD_AMOUNT)} handleClick={handleClick} onHoverFilmCard={null}/>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;
