import {RatingTitleType} from './types/films';

export const APP_ROUTE = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};
export const AUTHORIZATION_STATUS = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
export const FILMS_AMOUNT = 10;
export const RATING_STAR_AMOUNT = 10;
export const RATING_MIN = 1;
export const RATING_MAX = 10;
export const VOTES_MIN = 1;
export const VOTES_MAX = 10;
export const REVIEWS_MIN = 0;
export const REVIEWS_MAX = 10;
export const REVIEWS_TEXT: string[] = [
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
];
export const REVIEWS_AUTHORS: string[] = [
  'Tim Macoveev',
  'John Doe',
];
export const RatingTitle: RatingTitleType = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};
export const YEAR = 2019;
export const MAX_MONTH_GAP = 12;
export const MAX_DAYS_GAP = 7;
export const MAX_HOURS_GAP = 24;
export const MAX_MINUTES_GAP = 60;
export const MINUTES_IN_HOUR = 60;
