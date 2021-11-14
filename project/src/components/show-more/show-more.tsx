import React from 'react';
import {FILM_COUNT} from '../../const';

type ShowMoreProps = {
  onClickShowMore: (filmCount: number) => void;
}

function ShowMore({onClickShowMore}: ShowMoreProps): JSX.Element {
  return (
    <button onClick={(evt) => {evt.preventDefault(); onClickShowMore(FILM_COUNT);}} className="catalog__button" type="button">Show more</button>
  );
}

export default ShowMore;
