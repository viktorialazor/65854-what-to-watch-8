import {useEffect} from 'react';
import {connect, ConnectedProps, useDispatch} from 'react-redux';
import {State} from '../../types/state';
import {FilmDataType} from '../../types/films';
import {AUTHORIZATION_STATUS} from '../../const';
import Logo from '../logo/logo';
import MovieList from '../movie-list/movie-list';
import SignInOut from '../sign-in-out/sign-in-out';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';

const FILM_CARD_AMOUNT = 9;

const mapStateToProps = ({authorizationStatus, favoriteFilms}: State) => ({
  authorizationStatus,
  favoriteFilms,
});

type MyListProps = {
  handleClick: (newActiveClickFilm: FilmDataType) => void;
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MyListProps;

function MyList({authorizationStatus, favoriteFilms, handleClick}: ConnectedComponentProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    if(authorizationStatus === AUTHORIZATION_STATUS.AUTH) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, authorizationStatus]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <SignInOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <MovieList films={favoriteFilms.slice(0, FILM_CARD_AMOUNT)} handleClick={handleClick} />
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
  );
}

export {MyList};
export default connector(MyList);
