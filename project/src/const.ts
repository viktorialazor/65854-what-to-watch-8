import {FilmDataType, RatingTitleType} from './types/films';

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
export const RATING_STAR_AMOUNT = 10;
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
export const TAB_LIST: string[] = ['Overview', 'Details', 'Reviews'];
export const ACTIVE_GENRE = 'All genres';
export const FILM_COUNT = 8;
export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}
export const emptyFilm: FilmDataType = {
  id: 0,
  background: '',
  poster: '',
  image: '',
  title: '',
  genre: '',
  year: 0,
  description: '',
  rating: 0,
  votes: 0,
  director: '',
  actors: [],
  duration: 0,
  isFavorite: false,
  srcFullVideo: '',
  srcPreviewVideo: '',
};
export const MAX_GENRES_COUNT = 10;
