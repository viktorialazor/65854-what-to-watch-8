import {useState, useRef, useEffect} from 'react';

type VideoPlayerProps = {
	src: string;
	image: string;
  isSoundActive: boolean;
  isPlaying: boolean;
}

function VideoPlayer({src, image, isSoundActive, isPlaying}: VideoPlayerProps): JSX.Element {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const videoPlayTimer = setTimeout(() => setIsPlayingPreview(true), 1000);
      return () => {
        clearTimeout(videoPlayTimer);
      };
    }
    setIsPlayingPreview(false);
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (!isSoundActive) {
      videoRef.current.muted = true;
      videoRef.current.controls = false;
    }

    if (isPlayingPreview) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
    videoRef.current.src = src;
  }, [isPlayingPreview]);

  return (
    <video poster={image} ref={videoRef} width="auto" height="175" loop>
      <source src={src}/>
    </video>
  );
}

export default VideoPlayer;
