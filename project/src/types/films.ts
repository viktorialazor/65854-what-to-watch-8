export type RatingTitleType = {
  BAD: string;
  NORMAL: string;
  GOOD: string;
  VERY_GOOD: string;
  AWESOME: string;
}

export type FilmReviewUserType = {
  id: string | number;
  name: string,
}

export type FilmReviewType = {
  id: string | number;
  rating: number;
  date: string;
  comment: string;
  user: FilmReviewUserType;
}

export type AddComment = {
  rating: number;
  comment: string;
}

export type FilmDataType = {
  id: number;
  background: string;
  poster: string;
  image: string;
  title: string;
  genre: string;
  year: number;
  description: string;
  rating: number;
  votes: number;
  director: string;
  actors: string[];
  duration: number;
  isFavorite: boolean;
  srcFullVideo: string;
  srcPreviewVideo: string;
  name?: string;
  ['poster_image']?: string;
  ['preview_image']?: string;
  ['background_image']?: string;
  ['background_color']?: string;
  ['video_link']?: string;
  ['preview_video_link']?: string;
  ['scores_count']?: number;
  starring?: string[];
  ['run_time']?: number;
  released?: number;
  ['is_favorite']?: boolean;
}

export type setFormLockType = (isSend: boolean) => void;
