import React from 'react';
import YouTube from 'react-youtube';

interface Props {
  videoId: string; // Specify the type of videoId prop as string
}

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  return <YouTube videoId={videoId} />;
};

export default VideoPlayer;
