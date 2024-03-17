import React from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CameraComponent from "@/components/Comments/CameraComponent/CameraComponent";

const Index = () => {
  const router = useRouter();
  const { videoId } = router.query;

  // Ensure videoId is always treated as a string
  const normalizedVideoId = Array.isArray(videoId) ? videoId[0] : videoId;

  return (
    <div className="container mx-auto px-4">
      <h1>Video Player</h1>
      {normalizedVideoId && <VideoPlayer videoId={normalizedVideoId} />}
      <CameraComponent/>
    </div>
  );
};

export default Index;
