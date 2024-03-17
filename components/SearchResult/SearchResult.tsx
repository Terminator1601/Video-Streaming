"use client";
// pages/index.js
import React, { useState } from "react";
import axios from "axios";
import SearchBox from "../../components/SearchBox/SearchBox";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const API_KEY = "AIzaSyA7aO-R7_5Tnj38YQS_0jUS1kRvKg49I_8";

const SearchResult = () => {
  const [videos, setVideos] = useState<string[]>([]); // Specify type string[] for videos state

  const searchVideos = async (query: string) => {
    // Explicitly specify type string for query
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 5, // Change to 5 for minimum 5 results
            q: query,
            key: API_KEY,
          },
        }
      );
      const fetchedVideos = response.data.items.map(
        (item: any) => item.id.videoId
      ); // Specify type any for item
      setVideos(fetchedVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div>
      <SearchBox onSearch={searchVideos} />
      <div>
        {videos.map((videoId) => (
          <VideoPlayer key={videoId} videoId={videoId} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
