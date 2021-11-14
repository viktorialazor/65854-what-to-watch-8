import {FilmDataType} from '../../types/films';
import {FILM_COUNT} from '../../const';
import {getSortFilmList} from '../../utils/common';
import films from '../../mocks/films';

type GenreItemProps = {
  genre: string;
  activeGenre: string;
  onFilmGenre: (genre: string) => void;
  onFilmListByGenre: (filmList: FilmDataType[]) => void;
  onClickShowMore: (filmCount: number) => void;
  onHoverFilmCard: (film: FilmDataType) => void;
}

function GenreItem({genre, activeGenre, onFilmGenre, onFilmListByGenre, onClickShowMore, onHoverFilmCard}: GenreItemProps): JSX.Element {
  const getClasses = (genreItem: string, genreActive: string): string => {
    if (genreItem === genreActive) {
      return 'catalog__genres-item catalog__genres-item--active';
    }

    return 'catalog__genres-item';
  };

  const sortFilmList = getSortFilmList(films, genre);

  return (
    <li className={getClasses(genre, activeGenre)}>
      <a href="/" className="catalog__genres-link" onClick={(evt) => {evt.preventDefault(); onFilmGenre(genre); onFilmListByGenre(sortFilmList); onClickShowMore(FILM_COUNT); onHoverFilmCard(sortFilmList[0]);} }>{genre}</a>
    </li>
  );
}

export default GenreItem;
