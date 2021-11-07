import React from 'react';
import {FilmDataType} from '../../types/films';
import MovieReview from '../movie-review/movie-review';

type MovieReviewsProps = {
  film: FilmDataType;
}

function MovieReviews({film}: MovieReviewsProps): JSX.Element {
  const {
    reviews,
  } = film;

  const endReviewInFirstColumn = Math.ceil(reviews.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.slice(0, endReviewInFirstColumn).map((item) => <MovieReview key={item.id} review={item}/>)
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.slice(endReviewInFirstColumn, reviews.length).map((item) => <MovieReview key={item.id} review={item}/>)
        }
      </div>
    </div>
  );
}

export default MovieReviews;
