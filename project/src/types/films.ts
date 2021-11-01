export type RatingTitleType = {
  BAD: string;
  NORMAL: string;
  GOOD: string;
  VERY_GOOD: string;
  AWESOME: string;
}

export type FilmReviewType = {
  id: string;
  text: string;
  rating: number;
  author: string;
  date: string;
  dateTime: string;
}

export type FilmDataType = {
  id: string;
  background: string;
  poster: string;
  image: string;
  title: string;
  genre: string[];
  year: number;
  description: string;
  rating: number;
  votes: number;
  director: string;
  actors: string[];
  duration: number;
  isFavorite: boolean;
  reviews: FilmReviewType[];
  srcFullVideo: string;
  srcPreviewVideo: string;
}
