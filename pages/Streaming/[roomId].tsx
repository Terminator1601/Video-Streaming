import React from "react";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CameraComponent from "@/components/Comments/CameraComponent/CameraComponent";
import SearchResult from "@/components/SearchResult/SearchResult";

const RoomPage = () => {
  const router = useRouter();
  const { roomId } = router.query;
  const { videoId } = router.query;
  const normalizedVideoId = Array.isArray(videoId) ? videoId[0] : videoId;

  return (
    <>
      <div>
        <h1>Room ID: {roomId}</h1>
        {/* You can render the streaming content here */}
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1>Video Player</h1>
          {normalizedVideoId && <VideoPlayer videoId={normalizedVideoId} />}
        </div>
        <div className="border">
          <CameraComponent />
        </div>
      </div>
      <SearchResult />
    </>
  );
};

export default RoomPage;
