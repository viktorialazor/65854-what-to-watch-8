import {FilmDataType} from '../types/films';
import {RATING_TITLE, AUTHORIZATION_STATUS, MINUTES_IN_HOUR} from '../const';

export const generateRatingTitle = (rating: number): string => {
  if (rating < 3) {
    return RATING_TITLE.BAD;
  } else if (rating >= 3 && rating < 5) {
    return RATING_TITLE.NORMAL;
  } else if (rating >= 5 && rating < 7) {
    return RATING_TITLE.GOOD;
  } else if (rating >= 7 && rating < 9) {
    return RATING_TITLE.VERY_GOOD;
  } else {
    return RATING_TITLE.AWESOME;
  }
};

export const humanizeDate = (date: string): string =>  {
  const dateComment = new Date(date);
  return dateComment.toLocaleString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'});
};

export const getRuntime = (duration = 0): string => {
  if ((duration >= MINUTES_IN_HOUR) && ((duration % MINUTES_IN_HOUR) === 0)) {
    const hours = parseInt((duration / MINUTES_IN_HOUR).toString(), 10);
    return `${hours}h`;
  } else if (duration > MINUTES_IN_HOUR && ((duration % MINUTES_IN_HOUR) !== 0)) {
    const hours = parseInt((duration / MINUTES_IN_HOUR).toString(), 10);
    const minutes = duration % MINUTES_IN_HOUR;
    return `${hours}h ${minutes}m`;
  }

  return `${duration}m`;
};

export const getActorList = (actors: string[]): string => {
  let actorsList = '';
  actors.forEach((item, index) => {
    if(index < actors.length - 1) {
      actorsList += `${item}, `;
    } else {
      actorsList += item;
    }
  });

  return actorsList;
};

export const getSortFilmList = (films: FilmDataType[], genre: string):FilmDataType[] =>  {

  let sortFilmList: FilmDataType[] = [];
  if (genre === 'All genres') {
    sortFilmList = films.slice();
  } else {films.forEach((filmItem) => {
    if (filmItem.genre === genre) {
      sortFilmList.push(filmItem);
    }
  });
  }
  return sortFilmList;
};

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AUTHORIZATION_STATUS.UNKNOWN;
