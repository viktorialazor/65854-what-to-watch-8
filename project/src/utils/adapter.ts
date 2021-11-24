import {FilmDataType} from '../types/films';

export const adaptFilmToClient = (film: FilmDataType): FilmDataType => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      background: film['background_image'],
      backgroundColor: film['background_color'],
      poster: film['poster_image'],
      image: film['preview_image'],
      title: film['name'],
      genre: film['genre'],
      year: film['released'],
      votes: film['scores_count'],
      actors: film['starring'],
      duration: film['run_time'],
      isFavorite: film['is_favorite'],
      srcFullVideo: film['video_link'],
      srcPreviewVideo: film['preview_video_link'],
    },
  );
  delete adaptedFilm['background_image'];
  delete adaptedFilm['background_color'];
  delete adaptedFilm['poster_image'];
  delete adaptedFilm['preview_image'];
  delete adaptedFilm['name'];
  delete adaptedFilm['released'];
  delete adaptedFilm['scores_count'];
  delete adaptedFilm['starring'];
  delete adaptedFilm['run_time'];
  delete adaptedFilm['is_favorite'];
  delete adaptedFilm['video_link'];
  delete adaptedFilm['preview_video_link'];

  return adaptedFilm;
};

