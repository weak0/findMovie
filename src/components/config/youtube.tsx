import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [playerWidth, setPlayerWidth] = useState<number | undefined>(undefined);
  const [playerHeight, setPlayerHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const playerContainer = document.getElementById('video-player-container');
      if (playerContainer) {
        const containerWidth = playerContainer.offsetWidth;
        const newHeight = Math.floor((containerWidth / 16) * 9); // Adjust aspect ratio as needed

        setPlayerWidth(containerWidth);
        setPlayerHeight(newHeight);
      }
    };

    handleResize(); // Initial calculation

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const opts = {
    width: playerWidth?.toString(),
    height: playerHeight?.toString(),
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div id="video-player-container" style={{ width: '100%' }}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
