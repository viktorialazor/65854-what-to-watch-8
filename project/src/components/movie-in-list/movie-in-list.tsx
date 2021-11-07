import React from 'react';
import {FilmDataType} from '../../types/films';
import {generateRatingTitle, getActorList} from '../../utils/common';

type MovieInListProps = {
  film: FilmDataType;
}

function MovieInList({film}: MovieInListProps): JSX.Element {
  const {
    rating,
    votes,
    description,
    director,
    actors,
  } = film;

  const ratingTitle = generateRatingTitle(rating);
  const actorsList = getActorList(actors);

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingTitle}</span>
          <span className="film-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actorsList} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default MovieInList;
