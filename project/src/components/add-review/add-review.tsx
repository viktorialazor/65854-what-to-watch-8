import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import Logo from '../logo/logo';
import AddReviewForm from '../add-review-form/add-review-form';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({film}: State) => ({
  film,
});

type AddReviewProps = {
  onBackToMovie: () => void;
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AddReviewProps;

function AddReview({film, onBackToMovie}: ConnectedComponentProps): JSX.Element {

  if (!film) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.background} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{film.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster} alt={film.title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm onBackToMovie={onBackToMovie}/>
      </div>

    </section>
  );
}

export {AddReview};
export default connector(AddReview);
