// import React from "react";
// import YouTube from "react-youtube";

// interface Props {
//   videoId: string; // Specify the type of videoId prop as string
// }

// const VideoPlayer: React.FC<Props> = ({ videoId }) => {
//   return (
//     <>
//       <YouTube videoId={videoId} />;
//     </>
//   );
// };

// export default VideoPlayer;

import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
}

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  const [playerWidth, setPlayerWidth] = useState<number>(0);

  useEffect(() => {
    const calculatePlayerWidth = () => {
      const screenWidth = window.innerWidth;
      const newWidth = Math.floor(screenWidth * (3 / 4)); // Calculate 3/4 of the screen width
      setPlayerWidth(newWidth);
    };

    calculatePlayerWidth();

    // Update width when the window is resized
    const handleResize = () => {
      calculatePlayerWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opts = {
    width: playerWidth.toString(),
    height: ((playerWidth * 9) / 16).toString(), // Maintain aspect ratio of 16:9
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
