import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {State} from '../../types/state';
import {FilmDataType} from '../../types/films';
import {AUTHORIZATION_STATUS} from '../../const';
import {fetchFilmAction, fetchCommentsAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import Logo from '../logo/logo';
import MovieList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';
import MovieInList from '../movie-in-list/movie-in-list';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import LoadingScreen from '../loading-screen/loading-screen';
import SignInOut from '../sign-in-out/sign-in-out';
import FavoriteButton from '../favorite-button/favorite-button';
import Player from '../player/player';

const FILM_CARD_AMOUNT = 4;

const mapStateToProps = ({film, comments, similarFilms, authorizationStatus}: State) => ({
  film,
  comments,
  similarFilms,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type MoviePageProps = {
  tabList: string[];
  activeTab: string;
  getActiveTab: ((activeTab: string) => void);
  id: number;
  handleClick: (newActiveClickFilm: FilmDataType) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MoviePageProps;

function MoviePage({tabList, activeTab, getActiveTab, film, comments, similarFilms, authorizationStatus, id, handleClick}: ConnectedComponentProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    if(id && id !== film?.id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchSimilarFilmsAction(id));
    }
  }, [dispatch, id, film?.id]);

  if (!film) {
    return (
      <LoadingScreen />
    );
  }

  const getActualMovieInfo = (tab: string): JSX.Element => {
    switch (tab) {
      case 'Overview':
        return <MovieInList film={film} />;
      case 'Details':
        return <MovieDetails film={film} />;
      case 'Reviews':
        return <MovieReviews comments={comments} />;
    }

    return <MovieInList film={film} />;
  };

  const getReviewButton = (): JSX.Element | '' => {
    if(authorizationStatus === AUTHORIZATION_STATUS.AUTH) {
      return <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>;
    }
    return '';
  };

  const actualMovieInfo = getActualMovieInfo(activeTab);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <SignInOut />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="film-card__button">
                  <button onClick={()=>{<Player film={film} />;}} className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <FavoriteButton changedFilm={film} />
                {getReviewButton()}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.poster} alt={film.title} width="218" height="327" />
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
            <MovieList films={similarFilms.slice(0, FILM_CARD_AMOUNT)} handleClick={handleClick} />
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

export {MoviePage};
export default connector(MoviePage);
