import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {genreListPayload, Actions} from '../../types/action';
import {changeActiveGenre, resetFilmCount} from '../../store/action';
import {MAX_GENRES_COUNT} from '../../const';
import GenreItem from '../genre-item/genre-item';

const mapStateToProps = ({films, genrePayload}: State) => ({
  films,
  genrePayload,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onActiveGenre(genrePayload: genreListPayload) {
    dispatch(changeActiveGenre(genrePayload));
  },
  onClickShowMore(count: number) {
    dispatch(resetFilmCount(count));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GenresList(props: PropsFromRedux): JSX.Element {
  const {films, genrePayload, onActiveGenre, onClickShowMore} = props;
  const {genre} = genrePayload;

  const genresList: string[] = ['All genres'];
  films.forEach((item) => genresList.push(item.genre));
  const genres = genresList.filter((item, index) => index === genresList.indexOf(item));

  return (
    <ul className="catalog__genres-list">
      {genres.slice(0, Math.min(MAX_GENRES_COUNT, genres.length)).map((item) => <GenreItem films={films} genre={item} activeGenre={genre} onActiveGenre={onActiveGenre} onClickShowMore={onClickShowMore} key={item} />)}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
