// pages/VideoPage.js
import React from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const index = () => {
  const router = useRouter();
  const { videoId } = router.query;

  return (
    <div className="container mx-auto px-4">
      <h1>Video Player</h1>
      {videoId && <VideoPlayer videoId={videoId} />}
    </div>
  );
};

export default index;
