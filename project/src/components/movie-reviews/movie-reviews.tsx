import React from 'react';
import {FilmReviewType} from '../../types/films';
import MovieReview from '../movie-review/movie-review';

type MovieReviewsProps = {
  comments: FilmReviewType[];
}

function MovieReviews({comments}: MovieReviewsProps): JSX.Element {

  const endReviewInFirstColumn = Math.ceil(comments.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.slice(0, endReviewInFirstColumn).map((item) => <MovieReview key={item.id} review={item}/>)
        }
      </div>
      <div className="film-card__reviews-col">
        {
          comments.slice(endReviewInFirstColumn, comments.length).map((item) => <MovieReview key={item.id} review={item}/>)
        }
      </div>
    </div>
  );
}

export default MovieReviews;
