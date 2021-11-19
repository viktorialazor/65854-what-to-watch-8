import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {incrementFilmCount} from '../../store/action';
import {FilmDataType} from '../../types/films';
import Logo from '../logo/logo';
import MovieList from '../movie-list/movie-list';
import GenresList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import {Dispatch} from 'redux';
import {Actions} from '../../types/action';

type MainScreenProps = {
  handleClick: (newActiveClickFilm: FilmDataType) => void;
  filmPromo: FilmDataType;
}

const mapStateToProps = ({genrePayload, filmCount}: State) => ({
  genrePayload,
  filmCount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onClickShowMore(count: number) {
    dispatch(incrementFilmCount(count));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {
  const {handleClick, filmPromo, filmCount, genrePayload, onClickShowMore} = props;
  const {filmList} = genrePayload;

  const getShowMoreButton = (films: FilmDataType[], count: number): JSX.Element | null => {
    if (films.length > count) {
      return <ShowMore onClickShowMore={onClickShowMore}/>;
    }
    return null;
  };

  const getFilmList = (films: FilmDataType[], count: number): FilmDataType[] => films.slice(0, count);

  const filmsForShow: FilmDataType[] = getFilmList(filmList, filmCount);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmPromo.background} alt={filmPromo.title} />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmPromo.poster} alt={filmPromo.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre[0]}</span>
                <span className="film-card__year">{filmPromo.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <div className="catalog__films-list">
            <MovieList films={filmsForShow} handleClick={handleClick}/>
          </div>

          <div className="catalog__more">
            {getShowMoreButton(filmList, filmCount)}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="/" className="logo__link logo__link--light">
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

export {MainScreen};
export default connector(MainScreen);
