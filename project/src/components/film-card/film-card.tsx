import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmDataType} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmDataType;
  handleClick: (movieState: FilmDataType) => void;
  onHoverFilmCard: ((film: FilmDataType) => void) | null;
  activeFilm: FilmDataType;
}

function FilmCard({film, handleClick, onHoverFilmCard, activeFilm}: FilmCardProps): JSX.Element {
  const {
    id,
    image,
    title,
    srcPreviewVideo,
  } = film;

  const [isPlaying, setIsPlaying] = useState(false);

  const hoverMouseCardHandler = () => {setIsPlaying(!isPlaying);};

  const getActualTeg = (cardWithVideo: FilmDataType): JSX.Element => {
    if (cardWithVideo.id === film.id) {
      return <VideoPlayer src={srcPreviewVideo} image={image} isSoundActive={false} isPlaying={isPlaying}/>;
    }
    return <img src={image} alt={title} width="280" height="175" />;
  };

  const actualTeg = getActualTeg(activeFilm);

  return (
    <article onMouseEnter={() => {if(onHoverFilmCard !== null) {onHoverFilmCard(film);} hoverMouseCardHandler();}} onMouseLeave={() => {hoverMouseCardHandler();}} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {actualTeg}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} onClick={() => handleClick(film)}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
