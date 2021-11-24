import {genreListPayload} from '../../types/action';
import {FilmDataType} from '../../types/films';
import {FILM_COUNT} from '../../const';
import {getSortFilmList} from '../../utils/common';

type GenreItemProps = {
  films: FilmDataType[];
  genre: string;
  activeGenre: string;
  onActiveGenre: (genrePayload: genreListPayload) => void;
  onClickShowMore: (filmCount: number) => void;
}

function GenreItem({films, genre, activeGenre, onActiveGenre, onClickShowMore}: GenreItemProps): JSX.Element {
  const getClasses = (genreItem: string, genreActive: string): string => {
    if (genreItem === genreActive) {
      return 'catalog__genres-item catalog__genres-item--active';
    }

    return 'catalog__genres-item';
  };

  const sortFilmList = getSortFilmList(films, genre);
  return (
    <li className={getClasses(genre, activeGenre)}>
      <a href="/" className="catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onActiveGenre({genre: genre, filmList: sortFilmList}); onClickShowMore(FILM_COUNT);} }>{genre}</a>
    </li>
  );
}

export default GenreItem;
