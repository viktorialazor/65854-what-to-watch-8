import { nanoid } from 'nanoid';
import {RATING_MIN, RATING_MAX} from '../const';
import {FILMS_AMOUNT, REVIEWS_MIN, REVIEWS_MAX} from '../const';
import {getRandomInteger, getRandomFloat, generateReviewText, generateReviewAuthor, generateReviewDate, humanizeDate} from '../utils/common';
import {FilmReviewType} from '../types/films';

const generateReview = (): FilmReviewType[] => {
  const reviewsQuantity = getRandomInteger(REVIEWS_MIN, REVIEWS_MAX);
  const reviews = [];

  for (let i = 0; i < reviewsQuantity; i++) {
    const reviewDate = generateReviewDate();

    const review = {
      id: nanoid(),
      text: generateReviewText(),
      rating: getRandomFloat(RATING_MIN, RATING_MAX),
      author: generateReviewAuthor(),
      date: humanizeDate(reviewDate),
      dateTime: new Date(reviewDate).toISOString().substring(0, 10).toString(),
    };

    reviews.push(review);
  }

  return reviews;
};

const generateReviews = (): FilmReviewType[][] => {
  let review = [];
  const reviews = [];

  for (let i = 0; i < FILMS_AMOUNT; i++) {
    review = generateReview();
    reviews.push(review);
  }

  return reviews;
};

const reviews = generateReviews();

export default reviews;
