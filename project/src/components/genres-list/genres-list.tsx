import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeActiveGenre, resetFilmCount} from '../../store/action';
import {State} from '../../types/state';
import {genreListPayload, Actions} from '../../types/action';

import GenreItem from '../genre-item/genre-item';

const mapStateToProps = ({genrePayload}: State) => ({
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
  const {genrePayload, onActiveGenre, onClickShowMore} = props;
  const {genre} = genrePayload;
  const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) => <GenreItem genre={item} activeGenre={genre} onActiveGenre={onActiveGenre} onClickShowMore={onClickShowMore} key={item} />)}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
