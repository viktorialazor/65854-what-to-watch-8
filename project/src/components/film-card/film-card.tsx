import {FilmDataType} from '../../types/films';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: FilmDataType;
  handleClick: (movieState: FilmDataType) => void;
  handleHover: ((movieState: FilmDataType) => void) | null;
}

function FilmCard({film, handleClick, handleHover}: FilmCardProps): JSX.Element {
  const {
    id,
    image,
    title,
  } = film;

  return (
    <article onMouseEnter={() => {if(handleHover !== null) {handleHover(film);}}} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} onClick={() => handleClick(film)}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
