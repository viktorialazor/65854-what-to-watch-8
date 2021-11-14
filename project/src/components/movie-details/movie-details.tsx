import React from 'react';
import {FilmDataType} from '../../types/films';
import {getRuntime} from '../../utils/common';

type MovieDetailsProps = {
  film: FilmDataType;
}

const getActorsList = (actor: string, actorNumber: number, actorsAmount: number): JSX.Element => {
  if (actorNumber !== actorsAmount - 1) {
    return (<React.Fragment> {actor} <br /> </React.Fragment>);
  } else {
    return (<React.Fragment> {actor} </React.Fragment>);
  }
};

function MovieDetails({film}: MovieDetailsProps): JSX.Element {
  const {
    genre,
    year,
    director,
    actors,
    duration,
  } = film;

  const runtime = getRuntime(duration);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">{actors.map((item, index,array) => getActorsList(item, index, array.length))}</span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runtime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre[0]}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
