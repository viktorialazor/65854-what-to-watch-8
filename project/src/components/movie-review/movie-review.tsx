import React from 'react';
import {FilmReviewType} from '../../types/films';
import {humanizeDate} from '../../utils/common';

type MovieReviewProps = {
  review: FilmReviewType,
}

function MovieReview({review}: MovieReviewProps): JSX.Element {
  const {
    comment,
    rating,
    user,
    date,
  } = review;

  const dateComment = humanizeDate(date);
  const author = user.name;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{dateComment}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default MovieReview;
