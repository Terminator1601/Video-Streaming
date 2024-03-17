"use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import SearchBox from "../../components/SearchBox/SearchBox";

// const API_KEY = "AIzaSyA7aO-R7_5Tnj38YQS_0jUS1kRvKg49I_8";

// const SearchResult = () => {
//   const [videos, setVideos] = useState<any[]>([]); // Specify type any[] for videos state

//   const searchVideos = async (query: string) => {
//     // Explicitly specify type string for query
//     try {
//       const response = await axios.get(
//         "https://www.googleapis.com/youtube/v3/search",
//         {
//           params: {
//             part: "snippet",
//             maxResults: 5, // Change to 5 for minimum 5 results
//             q: query,
//             key: API_KEY,
//           },
//         }
//       );
//       setVideos(response.data.items);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <SearchBox onSearch={searchVideos} />
//       <div className="grid grid-cols-3 gap-4">
//         {videos.map((video: any) => (
//           <Link key={video.id.videoId} href={`/Streaming?${video.id.videoId}`}>
//             <img
//               src={video.snippet.thumbnails.default.url}
//               alt={video.snippet.title}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResult;
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import SearchBox from "../../components/SearchBox/SearchBox";

const API_KEY = "AIzaSyA7aO-R7_5Tnj38YQS_0jUS1kRvKg49I_8";

const SearchResult = () => {
  const [videos, setVideos] = useState<any[]>([]); // Specify type any[] for videos state

  const searchVideos = async (query: string) => {
    // Explicitly specify type string for query
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 6, // Change to 5 for minimum 5 results
            q: query,
            key: API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBox onSearch={searchVideos} />
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video: any) => (
          <Link
            key={video.id.videoId}
            href={`/Streaming?videoId=${video.id.videoId}`}
          >
            <div className="flex flex-col">
              <img
                src={video.snippet.thumbnails.medium.url} // Use 'high' quality thumbnail
                alt={video.snippet.title}
                width="5000"
                height="250"
              />
              <p className="mt-2">{video.snippet.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
