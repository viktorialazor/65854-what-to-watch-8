import React from 'react';
import {FilmReviewType} from '../../types/films';

type MovieReviewProps = {
  review: FilmReviewType,
}

function MovieReview({review}: MovieReviewProps): JSX.Element {
  const {
    text,
    rating,
    author,
    date,
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default MovieReview;
