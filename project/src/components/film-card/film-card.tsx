import {useState} from 'react';
import {FilmDataType} from '../../types/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmDataType;
  handleClick: (movieState: FilmDataType) => void;
  handleHover: ((movieState: FilmDataType) => void) | null;
  hasVideoPreview?: boolean;
}

function FilmCard({film, handleClick, handleHover, hasVideoPreview = false}: FilmCardProps): JSX.Element {
  const {
    id,
    image,
    title,
    srcPreviewVideo,
  } = film;

  const [isPlaying, setIsPlaying] = useState(false);

  const hoverMouseCardHandler = () => {setIsPlaying(!isPlaying);};

  const getActualTeg = (isVideoPreview: boolean): JSX.Element => {
    if (isVideoPreview) {
      return <VideoPlayer src={srcPreviewVideo} image={image} isSoundActive={false} isPlaying={isPlaying}/>;
    }
    return <img src={image} alt={title} width="280" height="175" />;
  };

  const actualTeg = getActualTeg(hasVideoPreview);

  return (
    <article onMouseEnter={() => {if(handleHover !== null) {handleHover(film);} hoverMouseCardHandler();}} onMouseLeave={() => {hoverMouseCardHandler();}} className="small-film-card catalog__films-card">
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
