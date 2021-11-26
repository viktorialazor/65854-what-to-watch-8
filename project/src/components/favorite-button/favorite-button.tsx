import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {FilmDataType} from '../../types/films';
import {AUTHORIZATION_STATUS} from '../../const';
import {changeFavoriteFilmStatus} from '../../store/api-actions';
import {store} from '../../index';

type FavoriteButtonProps = {
  changedFilm: FilmDataType;
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FavoriteButtonProps;

function FavoriteButton({authorizationStatus, changedFilm}: ConnectedComponentProps): JSX.Element {
  const handleFavoriteClick = ()=>{
    if (changedFilm !== undefined) {
      (store.dispatch as ThunkAppDispatch)(changeFavoriteFilmStatus(changedFilm.id, !changedFilm.isFavorite));
    }};

  return (
    <button onClick={handleFavoriteClick} className="btn btn--list film-card__button" type="button">
      {changedFilm?.isFavorite === true && (authorizationStatus === AUTHORIZATION_STATUS.AUTH)
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>
        My list
      </span>
    </button>
  );
}

export {FavoriteButton};
export default connector(FavoriteButton);
