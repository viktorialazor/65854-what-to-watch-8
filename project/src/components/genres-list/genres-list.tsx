import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeActiveGenre, filmListByGenre, resetFilmCount} from '../../store/action';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {FilmDataType} from '../../types/films';

import GenreItem from '../genre-item/genre-item';

type GenresListProps = {
  onHoverFilmCard: (film: FilmDataType) => void;
}

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onFilmGenre(genre: string) {
    dispatch(changeActiveGenre(genre));
  },
  onFilmListByGenre(filmList: FilmDataType[]) {
    dispatch(filmListByGenre(filmList));
  },
  onClickShowMore(count: number) {
    dispatch(resetFilmCount(count));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

function GenresList(props: ConnectedComponentProps): JSX.Element {
  const {onHoverFilmCard, activeGenre, onFilmGenre, onFilmListByGenre, onClickShowMore} = props;
  const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) => <GenreItem genre={item} activeGenre={activeGenre} onFilmGenre={onFilmGenre} onFilmListByGenre={onFilmListByGenre} onClickShowMore={onClickShowMore} onHoverFilmCard={onHoverFilmCard} key={item} />)}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
