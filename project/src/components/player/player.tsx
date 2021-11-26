import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {FilmDataType} from '../../types/films';
import {APP_ROUTE} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type PlayerProps = {
  film: FilmDataType;
};

function Player({film}: PlayerProps): JSX.Element {
  const {
    duration,
    title,
    srcFullVideo,
  } = film;

  const [isVideoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingDuration, setRemainingDuration] = useState(0);

  const getFilmDuration = function (durationInSeconds: number) {
    const hours = Math.floor(durationInSeconds / 360);
    const minutes = Math.floor(durationInSeconds / 60 - hours * 60);
    const seconds = Math.floor(durationInSeconds - hours*360 - minutes * 60);
    const hourValue=`${hours<10 ? '0' : ''}${hours}`;
    const minuteValue=`${minutes<10 ? '0' : ''}${minutes}`;
    const secondValue=`${seconds<10 ? '0' : ''}${seconds}`;

    const mediaTime = `${hourValue}:${minuteValue}:${secondValue}`;
    return mediaTime;
  };

  const getTimeAsPercentage = function(durationInSeconds: number) {
    const percentage = Math.floor((+duration - durationInSeconds) *100 / +duration);
    return percentage;
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const play = async (unit: HTMLVideoElement) => {
    try {
      await unit.play();
    } catch {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!isVideoReady || !videoRef.current) {
      return;
    }
    const totalFilmDuration = Math.round(videoRef.current.duration);
    setRemainingDuration(totalFilmDuration);
    setIsPlaying(true);
  }, [isVideoReady]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const videoUnit = videoRef.current;
    if (isPlaying) {
      play(videoUnit);
      return;
    }
    videoUnit.pause();
  }, [isPlaying]);

  const onLoadedData =() => {
    setVideoReady(true);
  };

  const togglePlaying = () => {
    setIsPlaying((prevValue) => !prevValue);
  };

  const handleFullScreenClick = () => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.requestFullscreen();
  };

  const handleDurationUpdate = () => {
    videoRef.current ? setRemainingDuration(+(duration) - videoRef.current?.currentTime) : setRemainingDuration(0);
  };

  const onVideoPlay = () => {
    setIsPlaying(true);
  };

  const onVideoPause = () => {
    setIsPlaying(false);
  };

  const handlePlayButtonClick = () => {
    togglePlaying();
  };

  const iconPlayPauseButton = isPlaying ? '#pause' : '#play-s';
  const timeVideo = isVideoReady ? getFilmDuration(remainingDuration) : <LoadingScreen />;

  return film !== undefined ? (
    <div className="player">
      <video
        ref={videoRef}
        className="player__video"
        src={srcFullVideo}
        poster="img/player-poster.jpg"
        onPlay={onVideoPlay}
        onPause={onVideoPause}
        onTimeUpdate={(event)=> {
          handleDurationUpdate();
        }}
        onLoadedData={onLoadedData}
      />
      <Link to={APP_ROUTE.MAIN}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getTimeAsPercentage(remainingDuration)} max="100" />
            <div className="player__toggler" style={{left: `${getTimeAsPercentage(remainingDuration)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeVideo}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" disabled={!isVideoReady} onClick={handlePlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={iconPlayPauseButton} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>
          <button type="button" className="player__full-screen" disabled={!isVideoReady} onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) : <NotFoundScreen />;
}

export default Player;
