// import React, { useEffect, useRef, useState } from "react";

// const CameraComponent = () => {
//   const videoRef = useRef<HTMLVideoElement>(null); // Declare videoRef as HTMLVideoElement
//   const [stream, setStream] = useState<MediaStream | null>(null); // Specify type MediaStream | null for stream
//   const [isCameraEnabled, setIsCameraEnabled] = useState<boolean>(false); // Specify type boolean for isCameraEnabled
//   const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState<boolean>(false); // Specify type boolean for isMicrophoneEnabled

//   useEffect(() => {
//     const enableCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         setStream(stream);
//         setIsCameraEnabled(true);
//         setIsMicrophoneEnabled(true);
//         if (videoRef.current && stream) { // Add a guard clause to ensure stream is not null
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing camera and microphone:", error);
//       }
//     };

//     enableCamera();

//     // Cleanup function to stop the stream when component unmounts
//     return () => {
//       if (stream) {
//         const tracks = stream.getTracks();
//         tracks.forEach((track) => {
//           track.stop();
//         });
//       }
//     };
//   }, []);

//   const toggleCamera = () => {
//     if (stream) {
//       const videoTrack = stream.getVideoTracks()[0];
//       videoTrack.enabled = !videoTrack.enabled;
//       setIsCameraEnabled(videoTrack.enabled);
//     }
//   };

//   const toggleMicrophone = () => {
//     if (stream) {
//       const audioTrack = stream.getAudioTracks()[0];
//       audioTrack.enabled = !audioTrack.enabled;
//       setIsMicrophoneEnabled(audioTrack.enabled);
//     }
//   };

//   return (
//     <div>
//       <video ref={videoRef} autoPlay muted playsInline />
//       <div>
//         <button onClick={toggleCamera}>
//           {isCameraEnabled ? "Stop Camera" : "Start Camera"}
//         </button>
//         <button onClick={toggleMicrophone}>
//           {isMicrophoneEnabled ? "Mute Microphone" : "Unmute Microphone"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CameraComponent;


import React, { useEffect, useRef, useState } from "react";

const CameraComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState<boolean>(false);
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState<boolean>(false);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(stream);
        setIsCameraEnabled(true);
        setIsMicrophoneEnabled(true);
        if (videoRef.current && stream) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera and microphone:", error);
      }
    };

    enableCamera();

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsCameraEnabled(videoTrack.enabled);
    }
  };

  const toggleMicrophone = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      setIsMicrophoneEnabled(audioTrack.enabled);
    }
  };

  return (
    <div>
      <video className="m-auto pt-6"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "80%", // Set width to 1/4th of the window
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          // margin:"50px"
        }}
      />
      <div className="text-center pt-3">
        <button onClick={toggleCamera} className="text-center mx-4 px-4 bg-cyan-500">
          {isCameraEnabled ? "Stop Camera" : "Start Camera"}
        </button>
        <button onClick={toggleMicrophone} className="text-center mx-4 px-4 bg-cyan-200">
          {isMicrophoneEnabled ? "Mute Microphone" : "Unmute Microphone"}
        </button>
      </div>
    </div>
  );
};

export default CameraComponent;
