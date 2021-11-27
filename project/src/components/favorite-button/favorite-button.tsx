import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FilmDataType} from '../../types/films';
import {AUTHORIZATION_STATUS} from '../../const';
import {changeFavoriteFilmStatus} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type FavoriteButtonProps = {
  changedFilm: FilmDataType;
}

function FavoriteButton({changedFilm}: FavoriteButtonProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleFavoriteClick = ()=>{
    if (changedFilm !== undefined) {
      dispatch(changeFavoriteFilmStatus(changedFilm.id, !changedFilm.isFavorite));
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

export default FavoriteButton;
