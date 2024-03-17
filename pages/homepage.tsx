// // pages/index.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBox from '../components/SearchBox';
// import VideoPlayer from '../components/VideoPlayer';

// const API_KEY = 'YOUR_YOUTUBE_API_KEY';

// const homepage = () => {
//   const [videoId, setVideoId] = useState('');

//   const searchVideos = async (query) => {
//     try {
//       const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           part: 'snippet',
//           maxResults: 4,
//           q: query,
//           key: API_KEY,
//         },
//       });
//       const videoId = response.data.items[0].id.videoId;
//       setVideoId(videoId);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   return (
//     <div>
//       <SearchBox onSearch={searchVideos} />
//       {videoId && <VideoPlayer videoId={videoId} />}
//     </div>
//   );
// };

// export default homepage;
