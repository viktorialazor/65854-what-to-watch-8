import {useSelector, useDispatch} from 'react-redux';
import {genreListPayload} from '../../types/action';
import {changeActiveGenre, resetFilmCount} from '../../store/action';
import {MAX_GENRES_COUNT} from '../../const';
import GenreItem from '../genre-item/genre-item';
import {getFilms} from '../../store/film-data/selectors';
import {getGenrePayload} from '../../store/film-process/selectors';

function GenresList(): JSX.Element {
  const films = useSelector(getFilms);
  const genrePayload = useSelector(getGenrePayload);
  const {genre} = genrePayload;

  const dispatch = useDispatch();

  const onActiveGenre = (payload: genreListPayload) => {
    dispatch(changeActiveGenre(payload));
  };

  const onClickShowMore = (count: number) => {
    dispatch(resetFilmCount(count));
  };

  const genresList: string[] = ['All genres'];
  films.forEach((item) => genresList.push(item.genre));
  const genres = genresList.filter((item, index) => index === genresList.indexOf(item));

  return (
    <ul className="catalog__genres-list">
      {genres.slice(0, Math.min(MAX_GENRES_COUNT, genres.length)).map((item) => <GenreItem films={films} genre={item} activeGenre={genre} onActiveGenre={onActiveGenre} onClickShowMore={onClickShowMore} key={item} />)}
    </ul>
  );
}

export default GenresList;
