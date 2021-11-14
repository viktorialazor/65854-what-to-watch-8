import {FilmDataType} from '../types/films';
import {REVIEWS_TEXT, YEAR, MAX_MONTH_GAP, MAX_DAYS_GAP, MAX_HOURS_GAP, MAX_MINUTES_GAP, REVIEWS_AUTHORS, MINUTES_IN_HOUR} from '../const';

export const getRandomInteger = (from = 0, to = 1): number => {
  const lower = Math.ceil(Math.min(from, to));
  const upper = Math.floor(Math.max(from, to));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat = (from = 1, to = 10): number => {
  const lower = Math.min(from, to);
  const upper = Math.max(from, to);
  let number = Number((lower + Math.random() * (upper - lower + 1)).toFixed(1));

  if (number >= 10) {
    number = 10;
  }

  return number;
};

export const generateDescription = (): string => {

  const descriptions: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const totalStrings = getRandomInteger(1, 5);
  let description = '';
  const descriptionsFilm = descriptions.slice();

  for (let i = 0; i < totalStrings; i++) {
    const randomIndex = getRandomInteger(0, descriptionsFilm.length - 1);

    if (i > 0 && i < totalStrings) {
      description += '';
    }

    description += descriptionsFilm[randomIndex];
    descriptionsFilm.splice(randomIndex, 1);
  }

  return description;
};

export const generateRatingTitle = (rating: number): string => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5) {
    return 'Normal';
  } else if (rating >= 5 && rating < 7) {
    return 'Good';
  } else if (rating >= 7 && rating < 9) {
    return 'Very good';
  } else {
    return 'Awesome';
  }
};

export const generateReviewDate = (): Date => {
  const monthGap = getRandomInteger(-MAX_MONTH_GAP, MAX_MONTH_GAP);
  const daysGap = getRandomInteger(-MAX_DAYS_GAP, MAX_DAYS_GAP);
  const hoursGap = getRandomInteger(-MAX_HOURS_GAP, MAX_HOURS_GAP);
  const minutesGap = getRandomInteger(-MAX_MINUTES_GAP, MAX_MINUTES_GAP);
  const currentDate = new Date();

  currentDate.setFullYear(YEAR, monthGap, daysGap);
  currentDate.setHours(hoursGap, minutesGap);

  return new Date(currentDate);
};

export const humanizeDate = (date: Date): string =>  date.toLocaleString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'});

export const generateReviewAuthor = (): string => {
  const randomIndex = getRandomInteger(0, REVIEWS_AUTHORS.length - 1);

  return REVIEWS_AUTHORS[randomIndex];
};

export const generateReviewText = (): string => {
  const randomIndex = getRandomInteger(0, REVIEWS_TEXT.length - 1);

  return REVIEWS_TEXT[randomIndex];
};

export const getFilmDuration = (duration = 0): string => {
  let hours = 0;
  let minutes = 0;
  if ((duration >= MINUTES_IN_HOUR) && ((duration % MINUTES_IN_HOUR) === 0)) {
    hours = parseInt((duration / MINUTES_IN_HOUR).toString(), 10);
  } else if (duration > MINUTES_IN_HOUR && ((duration % MINUTES_IN_HOUR) !== 0)) {
    hours = parseInt((duration / MINUTES_IN_HOUR).toString(), 10);
    minutes = duration % MINUTES_IN_HOUR;
  } else {
    minutes = duration;
  }

  if (minutes === 0) {
    return `${hours}:00`;
  } else if(minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
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
    filmItem.genre.forEach((genreItem) => {
      if(genreItem === genre) {
        sortFilmList.push(filmItem);
      }
    });
  });
  }

  return sortFilmList;
};
